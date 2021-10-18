import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './styles.scss';
import { Survey, saveSurvey } from '../../reduxSlices/SurveySlice';
import { Options, Child } from '../../types/Survey';

// Material UI
import { Button, InputLabel, Modal, Alert, Box } from '@mui/material';
import { Typography, Container, TextField, Checkbox, FormGroup, FormControlLabel} from '@mui/material';

const SurveyApp = () => {
  const dispatch = useAppDispatch();
  const surveyState: any = useAppSelector(Survey);

  const uploadFileInput: any = useRef(null);
  const [finalSurvey, setFinalSurvey] = useState<Array<Options>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,    
  };

  const getQuestions = () => {
    setFinalSurvey(surveyState);
    setLoading(false);
  };

  const renderQuestions = () => {
    if (!finalSurvey || finalSurvey && !finalSurvey.length) return

    return finalSurvey.map((sv: any, index: number) => {
      return templateQuestion(sv, index);
    })
  }

  const resumeSurvey = () => {
    if (!finalSurvey) return
  
    return (
      <div>      
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thanks for answering!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This is your summary:
              <ul>
                {finalSurvey.map((sv: Options, index: number) => {
                  if (sv.typeField === 'checkbox') {
                    return (
                      <li key={index}>
                        <span><strong>{sv.title}</strong></span>
                        <ul className="sublist">{sv.children!.map((ch: Child, index: number) => {
                          return (
                            <li key={index}>{ch.title}: {ch.checked === true ? 'Yes' : 'No'}</li>
                          )
                        })}
                        </ul>
                      </li>
                    )
                  }

                  return (
                    <li key={index}>
                      <span><strong>{sv.title}&nbsp;</strong></span>
                      <span>{sv.answer}</span>
                    </li>
                  )
                })}
              </ul>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
   
  const send = () => {
    dispatch(saveSurvey(finalSurvey));

    setTimeout(() => {
      handleOpen()
    }, 2000);
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, objectQuestion: Options, childActive?: number) => {
    const { value } = e.target;

    let objectUpdated = objectQuestion;
    let isExistingObject = finalSurvey && finalSurvey.length ? finalSurvey.find((obj) => obj.title === objectQuestion.title) : false;
    let isMultiSelect = objectQuestion.typeField === 'checkbox';

    if (!isExistingObject) {
      if (!isMultiSelect) {
        objectUpdated["answer"] = value;
        setFinalSurvey([...finalSurvey, objectUpdated]);  // Array push
        return
      }
    }

    objectUpdated["answer"] = value;

    let newArray: any = finalSurvey.filter((obj) => {
      if (obj.title === objectUpdated.title) obj.answer = value;
      return obj;
    });

    newArray && setFinalSurvey(newArray);
  }

  const inputHandlerCheckbox = (e: ChangeEvent<HTMLInputElement>, question: Options, childActive: number) => {
    const { checked } = e.target;

    let indexQuestion = finalSurvey.findIndex((survey: any) => survey.title === question.title);

    let arrayFinalSurvey: Array<Options> = finalSurvey;
    arrayFinalSurvey[indexQuestion].children![childActive].checked = checked;

    setFinalSurvey([...arrayFinalSurvey]);
  }

  const templateQuestion = ({ name, title, typeField, children, answer }: Options, index: number) => {
    const templates: any = {
      "text": () => (
        <div key={index}>
          <TextField 
            id={`answer_${index}`}
            fullWidth
            margin="normal" 
            variant="filled" 
            name={`question_${index}`}
            label={title} 
            value={answer} 
            onChange={(e) => inputHandler(e, { name, title, typeField, children, answer })} 
          />
        </div>
      ),
      "file": () => (
        <div key={index}>
          <InputLabel htmlFor={`answer_${index}`}>{title}</InputLabel>
          <Button
            variant="outlined"
            component="label"
          >
            Upload File
            <input hidden ref={uploadFileInput} id={`answer_${index}`} type={typeField} name={`question_${index}`} value={answer} onChange={(e) => inputHandler(e, { name, title, typeField, children, answer })} />
          </Button>
          {uploadFileInput && uploadFileInput.current && uploadFileInput.current?.value}
        </div>
      ),
      "checkbox": () => (
        <div key={index}>
          <InputLabel htmlFor={`answer_${index}`}>{title}</InputLabel>
          {children && children.map(({ title: titleChild }: Child, indexChild) => (
            <FormGroup key={indexChild}>
              <FormControlLabel 
                control={
                  <Checkbox 
                    id={`answer_${index}-${indexChild}`}
                    onChange={(e) => inputHandlerCheckbox(e, { name, title, typeField, children, answer }, indexChild)} />
                } 
                label={titleChild} />
            </FormGroup>
          ))}
        </div>
      )
    }

    return typeField && templates[typeField] && templates[typeField]();
  };

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return (
    loading ? <div>Loading...</div> :
      <div className="survey">
        <Typography component="h1" variant="h4" align="center">
          Lockebio Survey
        </Typography>

        <Container sx={{ mb: 4, mt: 4 }}>
        </Container>
        {open ?
            resumeSurvey()
          : null
        }
        <div className="survey__list">
          {renderQuestions()}
        </div>
        {finalSurvey && finalSurvey.length ? <Button variant="contained" onClick={send}>Resume Survey</Button> : 
          <Alert severity="info">Sorry, there are no surveys available yet!</Alert>
        }
      </div>
  )
}

export default SurveyApp;