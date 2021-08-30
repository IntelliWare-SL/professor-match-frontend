import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Header from '../../common/Header';
import Footer from '../Home/components/Footer';
import { profCompleteProfile } from './redux/professorCompleteProfileActions';

const departments = [
  {
    department: '',
    topics: [],
  },
  {
    department: 'Computer Science',
    topics: ['HTML', 'MongoDB', 'Django', 'NoSQL', 'ASP.NET'],
  },
  {
    department: 'Management',
    topics: [
      'Leadership',
      'Motivation & Job Satisfaction',
      'Emotional Intelligence',
      'Communication',
      'Groups & Teams',
      'Recruiting',
      'Compensation',
      'Training',
      'Cross-cultural management',
      'Mission, vision, & goal-setting',
      'designing & formulating strategy',
      'Strategy implementation',
      'Corporate culture',
      'Organizational structure',
      'Innovation',
    ],
  },
];

const useStyles = makeStyles(() => ({
  btn: {
    background: '#00b074',
    borderRadius: 5,
    padding: '13px 0px',
    width: '200px',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'background-color 0.5s ease',
    '&:hover': {
      background: '#019563',
    },
  },
  formTitle: {
    fontSize: 20,
  },
}));

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.signInReducer.user);

  React.useEffect(() => {
    if (!user) {
      history.push('/');
    } else if (user.type !== 'professor') {
      history.push('/');
    }
  }, [user]);

  const [schoolName, setSchoolName] = React.useState('');
  const [campusLocation, setCampusLocation] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [discipline, setDiscipline] = React.useState('');
  const [myDepartment, setMyDepartment] = React.useState('');

  const [selectedDepartment1, setSelectedDepartment1] = React.useState('');
  const [selectedTopics1, setSelectedTopics1] = React.useState([]);

  const [selectedDepartment2, setSelectedDepartment2] = React.useState('');
  const [selectedTopics2, setSelectedTopics2] = React.useState([]);

  const [wantGuestLecturer, setWantGuestLecturer] = React.useState({
    checked: false,
    inPerson: true,
    zoom: true,
  });
  const [wantAdjunctProfessor, setWantAdjunctProfessor] = React.useState({
    checked: false,
    inPerson: true,
    zoom: true,
  });

  const [profilePic, setProfilePic] = React.useState('');

  const classes = useStyles();

  const submit = () => {
    const req = {
      schoolName,
      college,
      department: myDepartment,
      campusLocation,
      discipline,
      role: [],
      recruitingDepartment: [],
      // img: profilePic,
    };

    if (wantGuestLecturer.checked) {
      const reqWantGuestLecturer = {
        type: 'Guest Lecturer',
        inPerson: wantGuestLecturer.inPerson,
        zoom: wantGuestLecturer.zoom,
      };
      req.role.push(reqWantGuestLecturer);
    }
    if (wantAdjunctProfessor.checked) {
      const reqWantAdjunctProfessor = {
        type: 'Adjunct Professor',
        inPerson: wantAdjunctProfessor.inPerson,
        zoom: wantAdjunctProfessor.zoom,
      };
      req.role.push(reqWantAdjunctProfessor);
    }
    if (selectedDepartment1) {
      const reqSelectedDepartment1 = {
        department: selectedDepartment1,
        topics: selectedTopics1,
      };
      req.recruitingDepartment.push(reqSelectedDepartment1);
    }

    if (selectedDepartment2) {
      const reqSelectedDepartment2 = {
        department: selectedDepartment2,
        topics: selectedTopics2,
      };
      req.recruitingDepartment.push(reqSelectedDepartment2);
    }
    console.log(req);
    dispatch(profCompleteProfile(req));
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const previewImage = async (event) => {
    const base64DataString = await getBase64(event.target.files[0]);
    setProfilePic(base64DataString);
  };

  return (
    <div>
      <Header />
      <div style={{ margin: '30px 20%' }}>
        <div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 50,
              textAlign: 'center',
            }}
          >
            Complete Your Profile
          </div>

          {/* University or School Information */}
          <Grid container spacing={2} style={{ marginTop: 40 }}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>
                University or School Information
              </span>
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="medium"
                type="text"
                variant="outlined"
                placeholder="School Name"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={campusLocation}
                onChange={(e) => setCampusLocation(e.target.value)}
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="medium"
                type="text"
                variant="outlined"
                placeholder="Campus Location"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="medium"
                type="text"
                variant="outlined"
                placeholder="College"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="medium"
                type="text"
                variant="outlined"
                placeholder="Discipline / Functional area of teaching"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                value={myDepartment}
                onChange={(e) => setMyDepartment(e.target.value)}
                inputProps={{
                  style: { WebkitBoxShadow: '0 0 0 1000px white inset' },
                }}
                style={{ background: 'white' }}
                fullWidth
                size="medium"
                type="text"
                variant="outlined"
                placeholder="Department"
              />
            </Grid>
          </Grid>

          {/* What role do you need to fill? */}
          <Grid container spacing={2} style={{ marginTop: 40 }}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>
                What role do you need to fill?
              </span>
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                checked={wantGuestLecturer.checked}
                onChange={(e) =>
                  setWantGuestLecturer({
                    ...wantGuestLecturer,
                    checked: e.target.checked,
                  })
                }
                name="checkedB"
                color="primary"
              />
              Guest Lecturer
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                onChange={(e) =>
                  setWantGuestLecturer({
                    ...wantGuestLecturer,
                    inPerson: e.target.checked,
                  })
                }
                checked={wantGuestLecturer.inPerson}
                name="inPerson"
                color="primary"
                disabled={!wantGuestLecturer.checked}
              />
              In person on campus
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                name="zoom"
                color="primary"
                onChange={(e) =>
                  setWantGuestLecturer({
                    ...wantGuestLecturer,
                    zoom: e.target.checked,
                  })
                }
                checked={wantGuestLecturer.zoom}
                disabled={!wantGuestLecturer.checked}
              />
              Remote via Zoom, etc.
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                checked={wantAdjunctProfessor.checked}
                onChange={(e) =>
                  setWantAdjunctProfessor({
                    ...wantAdjunctProfessor,
                    checked: e.target.checked,
                  })
                }
                name="checkedB"
                color="primary"
              />
              Adjunct Professor
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                onChange={(e) =>
                  setWantAdjunctProfessor({
                    ...wantAdjunctProfessor,
                    inPerson: e.target.checked,
                  })
                }
                checked={wantAdjunctProfessor.inPerson}
                disabled={!wantAdjunctProfessor.checked}
                name="checkedB"
                color="primary"
              />
              In person on campus
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                onChange={(e) =>
                  setWantAdjunctProfessor({
                    ...wantAdjunctProfessor,
                    zoom: e.target.checked,
                  })
                }
                checked={wantAdjunctProfessor.zoom}
                disabled={!wantAdjunctProfessor.checked}
                name="checkedB"
                color="primary"
              />
              Remote via Zoom, etc.
            </Grid>
          </Grid>

          {/* For which Functional department are you recruiting */}
          <Grid container spacing={2} style={{ marginTop: 40 }}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>
                For which Functional department are you recruiting?
              </span>
            </Grid>
            <Grid item xs={5}>
              Department
              <Select
                value={selectedDepartment1}
                onChange={(e) => {
                  setSelectedDepartment1(e.target.value);
                  setSelectedTopics1([]);
                }}
                variant="outlined"
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
                style={{ width: 200, marginLeft: 30 }}
              >
                {departments
                  .filter((el) => el.department !== selectedDepartment2)
                  .map((department, index) => (
                    <MenuItem
                      // disabled={selectedTopics1.indexOf(topic) <= -1}
                      value={department.department}
                      key={index}
                      style={{ height: 40 }}
                    >
                      <span>{department.department}</span>
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={7} style={{ textAlign: 'right' }}>
              Topics
              <Select
                variant="outlined"
                multiple
                disabled={selectedDepartment1 === ''}
                value={selectedTopics1}
                renderValue={(selected) => selected.join(', ')}
                onChange={(e) => {
                  setSelectedTopics1(e.target.value);
                }}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
                style={{ width: 400, marginLeft: 30 }}
              >
                {departments
                  .filter((el) => el.department === selectedDepartment1)[0]
                  .topics.map((topic, index) => (
                    <MenuItem
                      // disabled={selectedTopics1.indexOf(topic) <= -1}
                      value={topic}
                      key={index}
                    >
                      <Checkbox checked={selectedTopics1.indexOf(topic) > -1} />
                      <span>{topic}</span>
                    </MenuItem>
                  ))}
              </Select>
            </Grid>

            {/* fdsfdsfdsfdsfsdff */}
            <Grid item xs={5}>
              Department
              <Select
                value={selectedDepartment2}
                onChange={(e) => {
                  setSelectedDepartment2(e.target.value);
                  setSelectedTopics2([]);
                }}
                variant="outlined"
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
                style={{ width: 200, marginLeft: 30 }}
              >
                {departments
                  .filter((el) => el.department !== selectedDepartment1)
                  .map((department, index) => (
                    <MenuItem
                      // disabled={selectedTopics1.indexOf(topic) <= -1}
                      value={department.department}
                      key={index}
                      style={{ height: 40 }}
                    >
                      <span>{department.department}</span>
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={7} style={{ textAlign: 'right' }}>
              Topics
              <Select
                variant="outlined"
                multiple
                disabled={selectedDepartment2 === ''}
                value={selectedTopics2}
                renderValue={(selected) => selected.join(', ')}
                onChange={(e) => {
                  setSelectedTopics2(e.target.value);
                }}
                inputProps={{
                  name: 'age',
                  id: 'age-native-simple',
                }}
                style={{ width: 400, marginLeft: 30 }}
              >
                {departments
                  .filter((el) => el.department === selectedDepartment2)[0]
                  .topics.map((topic, index) => (
                    <MenuItem
                      // disabled={selectedTopics1.indexOf(topic) <= -1}
                      value={topic}
                      key={index}
                    >
                      <Checkbox checked={selectedTopics2.indexOf(topic) > -1} />
                      <span>{topic}</span>
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: 40 }}>
            <Grid item xs={12}>
              <span className={classes.formTitle}>Profile Picture</span>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{ position: 'relative' }}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="icon-button-file"
                  type="file"
                  multiple
                  onChange={previewImage}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="icon-button-file">
                  <Avatar
                    alt="A"
                    src={profilePic}
                    style={{ height: 150, width: 150 }}
                  />
                  <AddCircleIcon
                    style={{
                      color: 'black',
                      cursor: 'pointer',
                      fontSize: 50,
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                    }}
                  />
                </label>
              </div>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            marginTop: 60,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div className={classes.btn} onClick={submit}>
            Save
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
