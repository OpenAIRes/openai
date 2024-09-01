async function gotoContent(title) {
    //const cleanedTitle = title.trim().replace(/\s+/g, '-').toLowerCase();
    const filePath = `${title}.html`;

    // Check if the file exists by trying to fetch it
    //try {
    //    const response = await fetch(filePath, { method: 'HEAD' });

        // If the file exists, redirect to it
        //if (response.ok) {
    window.location.href = filePath;
        //} else {
            // If the file does not exist, call OpenAI API
         //   callOpenAI(title);
        }