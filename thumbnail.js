let descriptionBox = document.querySelector(".descriptionBox");
let scrolledDown = false;
var aboutArtist = {
  taylorC:
    "Numerous Grammy Awards winner, singer-songwriter and country-pop star Taylor Swift is living every teenager’s dream. Born in a small town, she changed the way the current generation perceived country music. Being compared to the likes of legendary country artists such as Dolly Parton and Willie Nelson, Swift was only sixteen when she released her debut album. She is not only a great vocalist, but can also skilfully play instruments such as the guitar, piano and ukulele. She is the only female artist to have won two ‘Album of the Year’ awards at the Grammy’s. Her chart-busters like ‘Love Story’ and ‘You Belong with Me’ brought her global recognition. With the release of every album, she breaks her own record. She is an inspiration to several aspiring artists. Not only is she listed in the platinum-selling albums of all time, she also embodies compassion as she has extended unending support to several charitable organisations.",
  eminemC:
    "Eminem is an American rapper, record producer, songwriter, and actor. He is considered as one of the greatest and most influential artists of all time. The 'Rolling Stone' magazine has labeled him the 'King of Hip Hop,' and listed him in its list of the '100 Greatest Artists of All Time.' He became passionate about rapping at a young age of fourteen, and began attending local open-mic competitions with friends. As he grew up, he formed a group of rappers called 'D12,' which became quite popular among local music lovers. Soon, he caught the attention of famous record producer Dr. Dre, and with Dre's assistance, he released successful albums like 'The Slim Shady LP,' and 'The Marshall Mathers LP.' His albums have all been roaring hits, making him one of the biggest sensations in the rap industry. Most of his songs are based on his personal struggles with his family members and his career. This is considered by many as the USP of his albums, making them close to his fans' hearts. He has often run into trouble with the law. He is known for his explicit use of words, often sending out aggressive signals. Yet, this famous rap artiste has managed to win the hearts of critics and followers alike, bagging more than a dozen 'Grammy Awards.'",
  charithaC:
    "Charitha Rakshitha Attalage (born 06 October 1989) is a French-born Sri Lankan music producer who is currently based in Los Angeles. For the last 10 years, he worked as a Music Composer, Producer, Mixing Engineer, Recording Engineer and a Songwriter. At present, he is the most sought-after artisan in Sri Lanka, with genre-bending personality extending to the fusion of classical with modern-aged music. His music genres can be described as Indian Classical, Electronica, Contemporary Indian pop, Ambient, Acoustic, Drum & Bass, DubStep.",
  oliviaC:
    "Olivia Rodrigo grew up in California, where she demonstrated an early ability in music that included composing her own songs. A child actress, she landed starring roles on the TV series 'Bizaardvark' and 'High School Musical: The Musical: The Series.' Rodrigo released the heartrending debut single 'Drivers License' in January 2021. The song hit No. 1 on the Billboard Hot 100 and was the first song with more than one billion streams in 2021. She followed that up with the acclaimed album 'Sour' (2021).",
  drakeC:
    "Drake first came to prominence in the teen soap Degrassi: The Next Generation in the role of Jimmy Brooks, a wheelchair-bound character he played for seven years. After leaving the show he became one of the biggest rappers on the planet after signing a deal with Lil Wayne's label Young Money Entertainment. He is rarely out of the headlines, whether it’s for dating Rihanna or Jennifer Lopez, founding his own label, OVO Sound, or fronting the NBA’s Toronto Raptors as the team's global ambassador. It's no surprise that Jay Z labeled him as the Kobe Bryant of hip hop.",
};

// setInterval(descriptionBoxHide, 200);

function scrollWin() {
  setTimeout(() => {
    window.scrollBy(0, 300);
    console.log(scrolledDown);
  }, 200);
}

function hoverImg(e) {
  console.dir(e);
  let current = e.className
  descriptionBox.innerHTML = `<img src="/assets/${e.className}.jpg" alt="">
    <p style="text-align:left; margin-bottom: 50px"> ${ aboutArtist[current] }</p>`;
  scrollWin();
  if (scrollY > 500) {
    scrolledDown = true;
  }
}

function changeColor() {
  let color = document.getElementById("colorSelect").value;
  document.body.style.backgroundColor = `${color}`;
  document.querySelector(".navbar").style.backgroundColor = `${color}`;
}

function changeFont() {
  let color = document.getElementById("fontSelect").value;
  document.body.style.color = `${color}`;
  document.querySelector(".navbar").style.color = `${color}`;
}
