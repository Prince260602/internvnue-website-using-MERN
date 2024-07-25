/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

function Card(props) {
  return (
    <div className="card">
      <div id="question">{props.que}</div>
      <div answer="answer"> {props.ans}</div>
    </div>
  );
}

export default Card;
