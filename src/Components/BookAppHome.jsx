import React, { useState } from 'react'
import SideNavbar from '../Pages/SideNavbar';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const books = [
  {
    id: 1,
    author: "William Shakespearee",
    title: "Soul",
    image:
      "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
    William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
    </p>
    <p>
    At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
    </p>
    
    <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
    
    
    <p>
    Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
    However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
    </p>
    <br>
    </aside>
    
    <aside>
    <p>
     Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
    </p>
    <p>
    At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
    </p>
    <p>
     Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
    </p>
    <p>
    However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
    </p>
    <p>
    However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
    </p>`,
  },

  {
    id: 2,
    author: "Jack Daniels",
    title: "Memory",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
       
    Atomic Habits" by James Clear is a captivating self-help book that delves into the profound impact of small habits and the underlying science that governs habit formation. Clear's central thesis revolves around the concept of "atomic habits," which are tiny changes that, when consistently practiced, lead to remarkable transformations over time. He argues that the key to achieving lasting change lies not in dramatic overhauls, but rather in the consistent implementation of these small, incremental improvements.
        </p>
        <p>
        Clear structures the book around four fundamental principles of habit formation: cue, craving, response, and reward. The cue serves as the trigger that initiates a habit, prompting individuals to take action. Clear emphasizes the importance of identifying and understanding these cues, as they lay the foundation for habit formation. By recognizing the cues that trigger certain behaviors, individuals can intentionally design their environment to make desired habits more visible and accessible.
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Craving, according to Clear, is the motivational force behind every habit. He suggests that making habits inherently satisfying increases the likelihood of them becoming ingrained in one's routine. By associating positive emotions and rewards with desired behaviors, individuals can cultivate a sense of intrinsic motivation that sustains their commitment to their habits over time.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
        Throughout the book, Clear offers practical strategies and techniques for implementing these principles in everyday life. He introduces concepts such as habit stacking, where new habits are built upon existing routines, and the two-minute rule, which encourages starting with small, manageable actions to overcome inertia and build momentum. Clear also explores the concept of identity-based habits, where habits are tied to one's self-image, and discusses how changing one's identity can lead to lasting habit change.
        </p>
        <p>
        In conclusion, "Atomic Habits" provides readers with a comprehensive framework for understanding and harnessing the power of habits to achieve personal and professional goals. By emphasizing the significance of small, incremental changes and providing actionable strategies for habit formation, Clear empowers individuals to cultivate habits that lead to meaningful and lasting transformations in their lives.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },

  {
    id: 3,
    author: "Jim Beam",
    title: "My cover",
    image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
    It provides readers with a comprehensive framework for understanding and harnessing the power of habits to achieve personal and professional goals. By emphasizing the significance of small, incremental changes and providing actionable strategies for habit formation, Clear empowers individuals to cultivate habits that lead to meaningful and lasting transformations in their lives.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Response refers to the action taken in response to a cue, while reward is the ultimate outcome or benefit of a habit. Clear advocates for making responses easy and convenient to perform, as this reduces friction and increases the likelihood of habit formation. Moreover, he stresses the importance of immediate rewards to reinforce positive habits, making them more likely to stick in the long run.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 4,
    author: "Crown Royal",
    title: "A million to one",
    image:
      "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
    Response refers to the action taken in response to a cue, while reward is the ultimate outcome or benefit of a habit. Clear advocates for making responses easy and convenient to perform, as this reduces friction and increases the likelihood of habit formation. Moreover, he stresses the importance of immediate rewards to reinforce positive habits, making them more likely to stick in the long run.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 5,
    author: "Johnnie Walker",
    title: "Pencil",
    image:
      "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
    Response refers to the action taken in response to a cue, while reward is the ultimate outcome or benefit of a habit. Clear advocates for making responses easy and convenient to perform, as this reduces friction and increases the likelihood of habit formation. Moreover, he stresses the importance of immediate rewards to reinforce positive habits, making them more likely to stick in the long run.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 6,
    author: "Glenfiddich",
    title: "Audrey is One",
    image:
      "https://creativereview.imgix.net/content/uploads/2022/12/Colony_Mockup.jpg?auto=compress,format&q=60&w=1436&h=2000",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
        William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 7,
    author: "Captain Morgan",
    title: "The killer poison",
    image:
      "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/40050/optimized_large_thumb_stage.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
        William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 8,
    author: "William Shakespeare",
    title: "Soul",
    image:
      "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
        William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 9,
    author: "William Shakespeare",
    title: "Memory",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
        William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 10,
    author: "William Shakespeare",
    title: "My cover",
    image: "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
        William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 11,
    author: "William Shakespeare",
    title: "A million to one",
    image:
      "https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
        William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
  {
    id: 12,
    author: "William Shakespeare",
    title: "Pencil",
    image:
      "https://marketplace.canva.com/EAFXKFIDad4/1/0/1003w/canva-brown-mystery-novel-book-cover-cSu1pdo96zA.jpg",
    description:
      "A book review is a form of literary criticism in which a book is merely described or analyzed. ",
    content: `<p>
        William Shakespeare's "Romeo and Juliet" is a timeless tale of love, fate, and tragedy that has captivated audiences for centuries. Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares,
        </p>
        
        <p>the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.</p>
        
        
        <p>
        Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together.
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>
        <br>
        </aside>
        
        <aside>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        At the heart of the play is the passionate love between Romeo and Juliet, which transcends the barriers of their family feud. From the moment they meet at the Capulet's masquerade ball, they are drawn to each other with an irresistible force. Their love is intense and all-consuming, expressed through Shakespeare's lyrical poetry and romantic imagery. Romeo declares, "Did my heart love till now? forswear it, sight! / For I ne'er saw true beauty till this night" (Act 1, Scene 5), encapsulating the instantaneous connection he feels with Juliet.
        </p>
        <p>
         Set in Verona, Italy, the play tells the story of two young lovers from feuding families, whose passion ultimately leads to their untimely deaths. Through rich language, vivid characters, and poignant themes, Shakespeare explores the complexities of human emotion and the consequences of impulsive actions.
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. 
        </p>
        <p>
        However, their love is also fraught with danger and secrecy due to the feud between their families, the Montagues and Capulets. Despite the risks, Romeo and Juliet are willing to defy societal norms and family expectations to be together. Their clandestine marriage in Act 2 symbolizes their commitment to each other, but it also sets the stage for the tragic events that follow.
        </p>`,
  },
];


const BookAppHome = () => {

  const [searchQuery,setSearchQuery] = useState("")

  const filteredBooks = books.filter((books) => 
    books.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
  books.author.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );




const navigate = useNavigate()
const handleBookClick  = (id) => {
  navigate(`/BookDetail/${id}`)
}




  return (
     <div className='bg-[#e1c6ab] min-h-screen'>
      {/* Header Section */}
      <div className='py-8 bg'>
        <div className='sm:fixed top-5 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-20 justify-between px-4 sm:px-8'>
          <h1 className='text-3xl sm:text-4xl font-bold text-center sm:text-left'>Book App Reader</h1>

          {/* Search Input */}
          <div className='w-full sm:w-auto'>
            <input
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='p-3.5 w-full sm:w-60 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#cba886]'
            />
          </div>
        </div>
      </div>

      {/* Main Content with Side Navbar */}
      <div className='flex flex-col lg:flex-row'>
        {/* Side Navbar */}
        <div className='lg:w-1/4 mb-8 lg:mb-0'>
          <SideNavbar />
        </div>

        {/* Books Grid Section */}
        <div className='lg:w-3/4 lg:px-8 py-16 bg-[#e1c6ab]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div key={book.id} className='bg-[#cba886] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                  {/* Book Image */}
                  <div onClick={() => handleBookClick(book.id)} className='cursor-pointer'>
                    <img
                      src={book.image}
                      alt={book.title}
                      className='w-full h-60 object-cover rounded-lg'
                    />
                  </div>

                  {/* Book Author */}
                  <div className='mt-4'>
                    <h2 className='text-lg font-semibold'>{book.author}</h2>
                  </div>

                  {/* Book Description */}
                  <div className='mt-2'>
                    <p className='text-sm text-gray-600'>{book.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 text-lg">No books found</p>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default BookAppHome
