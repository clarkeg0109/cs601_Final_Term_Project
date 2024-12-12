import React from 'react';

const Resume: React.FC = () => (
    <section id="resume" style={{ padding: '2rem', textAlign: 'center' }}>
<h1>Resume:</h1>
<p>
Click here to download my resume.

<abbr></abbr></p>
<a
href="/images/Fake-Resume.pdf" // Replace with the correct path to your resume file
download="Resume.pdf"
style={{
    display: 'block',
        marginTop: '5rem',
        marginRight: '10rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#6200ea',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
}}
>
Download Resume
</a>

<div style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '800px', margin: '2rem auto' }}>
<h2>Experience:</h2>
<p><strong> Random Frontend Developer</strong>, XYZ Company (2023–Present)</p>
<p>Building web applications using React, TypeScript, and more.</p>

<h2>Education:</h2>
<p><strong>Masters in Science Software Development</strong>, Boston University (2017–2021)</p>
<p>Specialized in web development and user interface design.</p>

<h2>Skills:</h2>
<ul>
<li>Python,React, TypeScript, JavaScript, HTML5, CSS3,</li>
<li> UI/UX, Accessibility</li>

</ul>
</div>
</section>
);

export default Resume;
