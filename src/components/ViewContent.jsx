
import { useState, useEffect } from 'react';
import Typewriter from './Typewriter.jsx'; 

const art = `
  ⠀⠀⢰⡏⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⢠⠏⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀
⠀⠀⡜⡁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⣿⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠀
⠀⠀⢻⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣿⡟⠀⢸⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
⠀⠀⢸⡿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢸⡿⡇⠀⢸⡿⢸⣿⡟⣿⣿⣿⣿⣿⣿⡏⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀
⠀⠀⠀⠁⠈⢿⣿⣿⣿⡯⢬⣼⣁⠀⣧⢧⠀⠠⡇⠝⣿⡇⢻⣿⣿⣿⣿⣿⠃⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠈⣿⣿⣿⡀⣀⣙⠋⠛⠷⣄⠀⢀⡇⠨⢃⣧⠚⠉⠙⣿⠿⠟⠀⢘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠀⠀⠀⠀⣿⢿⣿⡏⣙⣿⣷⣄⣢⡈⠁⠀⠀⠀⠀⠏⠠⠶⠷⠿⢶⣦⣄⡐⠟⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡘⠀
⠀⠀⠀⠀⠀⠀⢻⠀⢻⡇⠘⠻⠿⠿⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣖⡀⠉⠛⠓⠦⣼⣿⠟⣿⣿⣿⣿⣿⣿⣿⠋⡈⣿⣿⣿⡇⠇⠀
⠀⠀⠀⠀⠀⠀⠘⠂⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⣿⣷⣶⣤⣀⡀⢻⢓⣿⣿⣿⣿⣿⣿⣯⠞⣼⣿⣿⣿⡧⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠿⠿⠗⠛⠀⠀⠘⣿⣿⣿⣿⣿⡟⣀⣾⣿⣿⣿⠏⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢧⡀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣭⣿⣿⣿⣿⣿⣿⡏⠀⠹⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢳⣄⠀⠀⠈⠓⢤⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⣿⣿⣿⣿⡟⠛⠛⠿⠋⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣎⣴⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣦⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⡶⠟⡡⢼⣿⣿⣿⣿⣯⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⢾⣿⣿⣿⡇⠑⢤⣀⠀⠀⠀⢀⡀⢠⣴⡮⠕⢋⡡⠔⠋⠀⣼⣿⣿⣿⣿⠿⢹⡙⢆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣠⢤⣶⣪⣿⣷⣿⣿⣿⡿⡇⠀⠀⠈⢫⡉⠉⠩⢉⣩⠤⠒⠊⠁⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣶⡀⠑⢄⠀⠀⠀⠀⠀
⠀⠀⢀⡤⠒⣉⣀⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣠⣾⣿⣿⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠑⣄⠀⠀⠀
⢀⣀⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⣴⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠈⢢⡀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⠙⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⠉⢀⣨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣢
`;

function getAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

function pageContents() {
  const [currentSection, setPageContent] = useState('');

  useEffect(() => {
    const update = () => {
        setPageContent(window.location.hash);
    };

    update();
    window.addEventListener('hashchange', update);

    return () => {
      window.removeEventListener('hashchange', update);
    };
  }, []);

  return (
    <div class="flex flex-col flex-1 p-6">
        {currentSection === "#about" && (
            <div class="flex-1 p-6 mx-auto text-center">
                <Typewriter client:load 
                text={[
                    "About me..", 
                ]}
            />
            <p class="mt-5 mr-6 ml-6 text-left">
                As for my persona, I am more comfortable not giving away my real name without any regard <br />
                So, if you are interested about that. Check out my CV provided in contact section!
                <br />
                <br />

                I'm <span style={{ color: 'var(--yellow-base)' }}>{getAge("2002-10-11")} years old</span>, living in <span style={{ color: 'var(--yellow-base)' }}>Poland</span>, and I've been fascinated by computers
                and tech since I was about <span style={{ color: 'var(--yellow-base)' }}>10</span>.

                <br />
                I'm a self-taught, <span style={{ color: 'var(--green-base)' }}>emerging web developer</span> with a background as a <span style={{ color: 'var(--green-base)' }}>junior IT specialist</span>,
                thanks to my technical degree and previous <span style={{ color: 'var(--green-base)' }}>IT admin experience</span>.
                <br />
                <br />

                I've got experience being an admin in <span style={{ color: 'var(--purple-base)' }}>multiplayer games</span>,
                and I also ran my own servers where I was the owner,
                kind of like a <span style={{ color: 'var(--purple-base)' }}>project manager</span>, and even did some of the <span style={{ color: 'var(--purple-base)' }}>development work</span> myself!
                <br />
                <br />

                <span style={{ color: 'var(--blue-base)' }}>Music</span> and <span style={{ color: 'var(--blue-base)' }}>art</span> are also big passions of mine.
                I've also explored  <span style={{ color: 'var(--blue-base)' }}>my musical side</span> by giving it a go myself.

            </p>
            </div>
        )}
        {currentSection === "#skills" && (
            <div class="flex-1 p-6 mx-auto text-center">
                <Typewriter client:load 
                text={[
                    "My skills..", 
                ]}
            />
            <p class="mt-5 mr-6 ml-6 text-left">
                As for my personal set of skills, I could say that if I need to get things done fast, 
                I can stay focused, and I'm usually able to find a way to solve problems without getting stuck for too long.
                <br />
                <br />
                I'm pretty confident in my ability to connect with people and handle their needs. 
                My experience in customer service taught me a lot about <span style={{ color: 'var(--blue-base)' }}>building good relationships</span> with clients.
                <br />
                <br />
                I can handle documentation really well, even when it's a lot.
                As a <span style={{ color: 'var(--blue-base)' }}>digitalization specialist</span>, I got a lot of practice working with many documents.
                <br />
                <br />
                I can easily work with <span style={{ color: 'var(--blue-base)' }}>Linux</span> and <span style={{ color: 'var(--blue-base)' }}>Windows</span>. I know how to use <span style={{ color: 'var(--yellow-base)' }}>Git</span> for managing code changes. 
                I've also had some hands-on time with <span style={{ color: 'var(--yellow-base)' }}>Cisco devices</span>. <span style={{ color: 'var(--yellow-base)' }}>CRM systems</span> are something I can handle well, 
                and from my <span style={{ color: 'var(--yellow-base)' }}>junior IT specialist job</span>, 
                I learned what it takes to keep a company's <span style={{ color: 'var(--yellow-base)' }}>jtechnology up and running</span>.
                <br />
                <br />
                I'm comfortable with the idea of <span style={{ color: 'var(--red-base)' }}>virtualization</span> and how it lets you do some neat things with computers. 
                I've actually used <span style={{ color: 'var(--red-base)' }}>Proxmox VE</span> quite a bit, both in my previous job and in my own time.
                <br />
                <br />
                I've got experience using various <span style={{ color: 'var(--blue-base)' }}>web development tools</span>. 
                This portfolio is a good example – it's made with the <span style={{ color: 'var(--blue-base)' }}>Astro framework</span>, 
                styled with <span style={{ color: 'var(--blue-base)' }}>TailwindCSS</span>, has some <span style={{ color: 'var(--blue-base)' }}>React components</span> for interactive stuff, 
                and <span style={{ color: 'var(--blue-base)' }}>Vite</span> helped me get it ready for the web.
            </p>
            </div>
        )}
        {currentSection === "#interests" && (
            <div class="flex-1 p-6 mx-auto text-center">
                <Typewriter client:load 
                text={[
                    "My interests..", 
                ]}
            />
            <p class="mt-5 mr-6 ml-6 text-left">
                As for my personal set of interests they are pretty diverse! 
                <br />
                <br />
                On the creative side, I love exploring music and art. 
                I'm also a big fan of technology and find programming really exciting. 
                I have a strong drive to learn new things constantly.
                Understanding the human mind through psychology and neurology is something I find incredibly captivating. 
                <br />
                <br />
                And finally, I'm interested in people and what's happening around the globe.
            </p>
            </div>
        )}
        {currentSection === "#contact" && (
            <div class="flex-1 p-6 mx-auto text-center">
                <Typewriter client:load 
                text={[
                    "My interests..", 
                ]}
            />
            <p class="mt-5 mr-6 ml-6 text-left">
                Finally, contact section!
                <br />
                <br />
                For your convenience, I've provided contact form. <br />
                <a href="https://drive.google.com/file/d/1_xv_8CnAD3IFaXmYFpW0UcISrnBZ6NZP/view" style={{ color: 'var(--yellow-base)' }}>Get my CV here!</a>

                <br />
                <br />
                <form action="https://formspree.io/f/xyzengnb" method="POST">
                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" placeholder='|' required />
                            <label for="">Name</label>
                        </div>

                        <div class="input-data">
                            <input type="text" placeholder='|' required />
                            <label for="">Last name</label>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="input-data">
                            <input type="email" name="email" placeholder='|' required />
                            <label for="">Email address</label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data textarea">
                            <textarea rows="8" cols="80" placeholder='|' name="message" required></textarea>
                            <br />
                                <label for="">Write your message</label>
                            <br />
                            <div class="form-row submit-btn">
                                <div class="input-data text-center">
                                    <input type="submit" value="< submit >" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </p>
            </div>
        )}
        {!currentSection && (
        <div class="flex-1 p-6 mx-auto text-center">    
            <Typewriter client:load 
                text={[
                    "Hello, World!", 
                    "My name is..",
                    "Lain!",
                    "I am..",
                    "emerging web developer..",
                    "also..",
                    "an somehow experienced IT admin..",
                    "and Linux power-user!",
                    "Enjoy reading my portfolio!"
                ]} 
            />
            <pre class="text-xs typewriter mt-10">
                {art}
            </pre>

            <div class="mt-10 space-x-4 mx-auto">
                <a href="https://github.com/lainxy" class="px-4 py-2 ncurses-like-btn">GitHub</a>
            </div>
        </div>
        )}
      </div>
  );
}

export default pageContents;