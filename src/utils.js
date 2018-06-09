export const secToMin = (secs) => {
  const min = Math.floor(secs / 60);
  const sec = Math.floor(secs % 60);

  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
};

export const inputOnChange  = (e) => {
  this.setState({[e.target.name]: e.target.value});
};