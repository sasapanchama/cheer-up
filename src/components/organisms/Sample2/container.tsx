// import Form from "./presentation";
// import { addTodo, changeValue } from "../../../redux/actions";
// import { connect } from "react-redux";

// const mapStateToProps = props => props;

// const mapDispatchToProps = dispatch => ({
//   addTodo: item => dispatch(addTodo(item)),
//   changeValue: value => dispatch(changeValue(value))
// });

// const mergeProps = (stateProps, dispatchProps) => {
//   const { form, todo = [] } = stateProps;
//   const { addTodo, changeValue } = dispatchProps;
//   return {
//     handleChange: e => changeValue(e.target.value),
//     handleSubmit: () => {
//       const id = todo.length + 1;
//       const _todo = { id, content: form, done: false };
//       addTodo(_todo);
//       changeValue("");
//     },
//     value: form
//   };
// };

// const FormContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
//   mergeProps
// )(Form);

// export default FormContainer;

import React, { FC } from 'react';

type Props = {};

const sample: FC<Props> = () => {
  return (
    <p>sample</p>
  );
};