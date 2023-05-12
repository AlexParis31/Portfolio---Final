// import resumePDF from '../public/resumetwo.pdf';

const DownloadButton = () => {
    const handleDownload = () => {
        const resumePDFUrl = '/resumetwo.pdf';
        const link = document.createElement('a');
        link.href = resumePDFUrl;
        link.download = 'resume.pdf';
        link.click();
      };
      

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
};

export default DownloadButton;