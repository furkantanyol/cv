let isDarkMode = false;

const link = document.getElementById('dark-mode-toggle');
link.onclick = () => toggleDarkMode();

// function savePDF() {
//   markdownpdf()
//     .from('../index.md')
//     .to('/path/to/document.pdf', function() {
//       console.log('Done');
//     });
// }

function toggleDarkMode() {
  const { body } = document;
  const link = document.getElementById('dark-mode-toggle');
  isDarkMode = !isDarkMode;
  link.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  body.classList.toggle('dark-mode');

  const feedbackImage = document.getElementsByClassName('feedback-image')[0];
  feedbackImage.classList.toggle('feedback-image-dark');

  const strongs = document.getElementsByTagName('strong');
  Array.from(strongs).forEach(el => {
    el.classList.toggle('strong-dark');
  });
}
