import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProfileInfo, signOut } from "../redux/actions/profileActions";
import { profileSelector } from "../redux/selectors";

const initialState = {
  firstName: "",
  lastName: "",
};

const ProfilePage = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);
  useEffect(() => {
    setState(profile);
  }, [profile]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://courses-b777d-default-rtdb.firebaseio.com/profiles.json",
        state
      )
      .then(({ data }) =>
        dispatch(addProfileInfo({ id: data.name, ...state }))
      );
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          First name:
          <input
            type='text'
            onChange={onHandleChange}
            name='firstName'
            value={state.firstName}
          />
        </label>
        <label>
          Last name:
          <input
            type='text'
            onChange={onHandleChange}
            name='lastName'
            value={state.lastName}
          />
        </label>
        <button type='submit'>Save</button>
      </form>
      <button onClick={() => dispatch(signOut())}>SiGN OUT</button>
    </>
  );
};

export default ProfilePage;

// import axios from "axios";
// import React, { Component } from "react";
// import { addProfileInfo } from "../redux/actions/profileActions";
// import { connect } from "react-redux";

// class ProfilePage extends Component {
//   state = {
//     firstName: "",
//     lastName: "",
//   };

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         "https://courses-b777d-default-rtdb.firebaseio.com/profiles.json",
//         this.state
//       )
//       .then(({ data }) =>
//         this.props.addProfileInfo({ id: data.name, ...this.state })
//       );
//   };
//   render() {
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <label>
//           First name:
//           <input
//             type='text'
//             onChange={this.onHandleChange}
//             name='firstName'
//             value={this.state.firstName}
//           />
//         </label>
//         <label>
//           Last name:
//           <input
//             type='text'
//             onChange={this.onHandleChange}
//             name='lastName'
//             value={this.state.lastName}
//           />
//         </label>
//         <button type='submit'>Save</button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     message: state.test.message,
//     data: state.profile.info,
//   };
// };
// // const mapDispatchToProps = { addProfileInfo };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   ownProps.fn("Hello");
//   return {
//     addProfileInfo: (profileInfo) => {
//       dispatch(addProfileInfo(profileInfo));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
