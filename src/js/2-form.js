const formData = { email: '', message: '' };
const formEl = document.querySelector('.feedback-form');
//get data from localStorage
const feedbackFormState = localStorage.getItem('feedback-form-state');

if (feedbackFormState) {
  const parsedfeedbackFormState = JSON.parse(feedbackFormState);
  formData.email = parsedfeedbackFormState.email;
  formData.message = parsedfeedbackFormState.message;
}

formEl.elements.email.value = formData.email;
formEl.elements.message.value = formData.message;

formEl.addEventListener('input', event => {
  if (event.target.type === 'email') {
    formData.email = event.target.value;
  }

  if (event.target.type === 'textarea') {
    formData.message = event.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const fillState = ['email', 'message'].every(value => {
    return event.target.elements[value].value !== '';
  });

  if (fillState) {
    console.log(formData);
    localStorage.clear();
    event.target.elements.email.value = '';
    event.target.elements.message.value = '';
    formData.email = '';
    formData.message = '';
  } else {
    console.log('Fill please all fields');
  }
});
