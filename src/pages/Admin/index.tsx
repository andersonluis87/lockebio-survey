import { ChangeEvent, useState } from 'react';
import { Child, Options } from '../../types/Survey';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Survey, save } from '../../reduxSlices/SurveySlice';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { pink } from '@mui/material/colors';

import './styles.scss';

const Admin = () => {
  const [newChildName, setNewChildName] = useState<string>('');
  const [typeQuestionSelected, setTypeQuestionSelected] = useState<string>('');
  const [typeQuestionObject, setTypeQuestionObject] = useState<Options>({ title: '', name: '', typeField: '', children: [], answer: '' });

  const dispatch = useAppDispatch();
  const surveyState = useAppSelector(Survey);

  const AddButton = () => (
    <IconButton aria-label="Add" size="small" onClick={() => addChild('checkbox', newChildName)}> 
      <AddIcon fontSize="small" />
    </IconButton>
  )

  const templateQuestion = (options: Options) => {
    const { title, children } = options;

    const template: any = {
      'text': () => (
          <TextField fullWidth margin="normal" variant="outlined" name="title" label="Type the question here for text" value={title} onChange={inputHandlerFields}  />
      ),
      'file': () => (
          <TextField fullWidth margin="normal" variant="outlined" name="title" label="Type the question here for upload" value={title} onChange={inputHandlerFields}  />
      ),
      'checkbox': () => (
        <div className="question question--checkbox">
          <TextField fullWidth margin="normal" variant="outlined" name="title" label="Type the question here for checkbox" value={title} onChange={inputHandlerFields}  />
                    
          {children && children.map((child: Child, index: number) => (
            <FormGroup key={index}>
                <FormControlLabel 
                  control={
                    <Checkbox value={child!.title} onChange={inputHandler}  />
                  } 
                  label={
                      <>
                      {child!.title}
                      <IconButton aria-label="Remove" size="small" onClick={() => removeChild('checkbox', child)}> 
                        <HighlightOffIcon sx={{ color: pink[500] }} fontSize="small" />
                      </IconButton>
                      </>
                  } />
            </FormGroup>
          ))}
          <div className="question__childadd">
            <TextField 
              margin="dense" 
              size="small" 
              variant="outlined" 
              name="title" 
              label="Type the option label"
              InputProps={{endAdornment: <AddButton />}}
              onChange={(e) => setNewChildName(e.target.value)}  
            />
          </div>
        </div>
      )
    };

    return typeQuestionSelected ? template[typeQuestionSelected] && template[typeQuestionSelected]() : null;
  }

  const renderQuestionSelected = () => {
    if (!Object.keys(typeQuestionObject).length) return <div>No Question Selected.</div>

    return templateQuestion(typeQuestionObject);
  }

  const inputHandlerFields = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const fieldUpdated: any = {};
    fieldUpdated[name] = value;

    setTypeQuestionObject({ ...typeQuestionObject, ...fieldUpdated });
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!name) return

    setTypeQuestionObject({
      title: '',
      name,
      answer: '',
      typeField: value,
      children: []
    });

    setTypeQuestionSelected(value);
  }

  const removeChild = (parent: string, child: Child) => {
    if (!typeQuestionObject || typeQuestionObject && !typeQuestionObject.children) return

    let typeQuestionObjectUpdated = typeQuestionObject.children!.filter((ch) => {
      return ch != child;
    });

    setTypeQuestionObject({ ...typeQuestionObject, children: typeQuestionObjectUpdated });
  }

  const addChild = (parent: string, titleChild: string) => {
    setTypeQuestionObject({ ...typeQuestionObject, children: [...typeQuestionObject.children!, { title: `${titleChild}`, checked: false }] });
  }

  const saveSurvey = () => {
    if (!typeQuestionObject) return

    dispatch(save(typeQuestionObject));
  }

  return (
    <div className="admin">
      <Typography component="h1" variant="h4" align="center">
        Admin
      </Typography>
      <Typography component="h5"  align="center">Create your survey</Typography>

      <Container sx={{ mb: 4, mt: 4 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose the type of your question</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel id="text" control={<Radio name="typequestion" value="text" onChange={inputHandler} />} label="Text"  />
            <FormControlLabel id="upload" control={<Radio name="typequestion" value="file" onChange={inputHandler} />} label="Upload" />
            <FormControlLabel id="checkbox" control={<Radio name="typequestion" value="checkbox" onChange={inputHandler} />} label="Checkbox" />
          </RadioGroup>
        </FormControl>
      
        {renderQuestionSelected()}

        <Box sx={{ mb: 2, mt: 2 }}>
         <Button variant="contained" onClick={saveSurvey}>Save</Button>
        </Box>
      </Container>
      
      {surveyState.length ? 
        <Container>
          <hr />
          <Typography component="h2" variant="h5" align="center">
            Questions saved
          </Typography>
          <List disablePadding>
            {surveyState.map(({ title, typeField, children }: Options, index: number) => (
              <ListItem key={index} sx={{ py: 1, px: 0 }}>
                <ListItemText 
                  primary={`Question ${index+1}: ${title}`} 
                  secondary={`Answer type: ${typeField}`} />
                <ul>
                {
                  children && children?.map(({ title }: Child, index: number) => (
                      <li key={index}>{`option ${index+1}: ${title}`}</li> 
                    )
                  )
                }
                </ul>
              </ListItem>
            ))}
          </List>
        </Container>
        : null
      } 
    </div>
  )
}

export default Admin;