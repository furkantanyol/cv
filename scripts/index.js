let isDarkMode = false;

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.onclick = () => toggleDarkMode();

const printPdfButton = document.getElementById('print-pdf-button');
printPdfButton.onclick = () => savePDF();

// Fix the mobile dates start
const titleParagraphs = Array.from(document.getElementsByTagName('p')).filter(
  el => {
    return (
      Array.from(el.childNodes).filter(cn => cn.tagName === 'CODE').length > 0
    );
  }
);

titleParagraphs.forEach(p => p.classList.add('job-title'));
// Fix the mobile dates end

function savePDF() {
  window.print();
}

function toggleDarkMode() {
  const { body } = document;
  const link = document.getElementById('dark-mode-toggle');
  isDarkMode = !isDarkMode;
  link.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  body.classList.toggle('dark-mode');

  const images = document.getElementsByTagName('img');
  Array.from(images).forEach(el => {
    el.classList.toggle('image-dark');
  });

  const strongs = document.getElementsByTagName('strong');
  Array.from(strongs).forEach(el => {
    el.classList.toggle('strong-dark');
  });
}
