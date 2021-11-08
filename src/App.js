import logo from './logo.svg';
import './App.scss';
import Home from './Components/Home/home'
import Blog from './Components/Blog/blog'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/blog/:id">
          <Blog database={database}  />
        </Route>
        <Route path="/">
          <Home database={database} />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;


const database = [
  {
  "title":"How to Invest your Money in Latest Technologies",
  "topic":"Business",
  "image":"https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  "paras": [
      "It’s early 2014 — the time when Mary Beth Brown decided to ask for a raise but never thought that it would put an end to her 12-year long professional relationship with Elon Musk. ",
      "Brown had been working for the modern-day Tony Stark Elon Musk for the last 12 years. She worked really hard as she would travel back and forth between Los Angeles and Silicon Valley every week, work late at night, and even on the weekends.",
      "She used to handle Musk’s scheduling across two companies (SpaceX and Tesla), manage public relations, and often help Musk make business decisions.",
      "Ashlee Vance, who told this story in his book “Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future,” described Brown like this",
      "Brown — or MB, as everyone called her — became Musk’s loyal assistant, establishing a real-life version of the relationship between Iron Man’s Tony Stark and Pepper Potts. If Musk worked a twenty-hour day, so too did Brown. Over the years, she brought Musk meals, set up his business appointments, arranged time with his children, picked out his clothes, dealt with press requests, and when necessary yanked Musk out of meetings to keep him on schedule. As a result, she would emerge as the only bridge between Musk and all of his interests and was an invaluable asset to the companies’ employees.",
      "Ashlee also mentioned that Brown had an outstanding contribution in developing SpaceX’s early culture as she paid close attention to every detail and helped balance the vibe around the office. ",
      "Anyway, Brown went to Musk and asked for a raise. To be specific, she wanted to be compensated as per SpaceX’s top executives. Do you know what Elon Musk told her in response? He told Brown to take a couple of weeks off so that he would realize how hard Brown’s responsibilities were. Actually, Musk wanted to realize how indispensable Brown was for him.",
      "So, Brown took a 2-week off and Musk took over her job.",
      "After the two weeks when Brown came to the office, Musk told her that he didn’t need her service anymore. It was a real shock to Brown. I mean no one gets fired for asking for a raise, right? ",
      "In the book, Ashlee wrote that this unceremonious event struck people inside SpaceX and Tesla, and it confirmed the lore around Musk’s cruel stoicism and lack of empathy.",
      "Musk claimed that he offered Brown another job with the same pay, but she refused and left the company. ",
      "Now the question is — why did Musk fire his long-term assistant who did everything right for Musk over the years? Is this all about asking for more money? Or, Did Brown fail to judge Musk even working for him for an incredibly long time? ", 
      "From Brown’s perspective, it’s apparent that she was confident about her contribution to the companies Musk owned, and therefore, she wanted Musk to treat her as a top soldier in his team." ,
      "But she indeed misunderstood Musk on this occasion as he considered the matter from a very realistic point of view overlooking all the previous contributions of Brown." ,
      "So, within just two weeks, Musk found Brown’s job is no longer required. I mean, for Musk — Brown failed to become indispensable. This article on theladders.com echoes the same as it says, “If you agree with Musk’s decision to fire his assistant from her role, it teaches you the importance of making yourself as indispensable as possible before asking for a raise. On the other hand, if you side with the assistant, it’s a valuable reminder to not go years with being underpaid and undervalued.”" ,
      "Anyway, this anecdote was refuted by Elon Musk, claiming that it is total nonsense. He tweeted by saying, Mary Beth was an amazing assistant for over ten years, but as company complexity grew, the role required several specialists vs one generalist.", 
      "Whatever the actual reason is, the anecdote teaches us a valuable lesson. And it’s not to take your job for granted.", 
      "No matter how many years you have been working for the company or how close you are to the management — you can be replaced at any moment. That’s the hard truth. So, be mentally prepared for that.",
      "And of course, before asking for a raise — don’t forget to give your boss at least a dozen reasons (if not many) why you deserve it."
  ]
},
  {
  "title":"Why Elon Musk Fired His Long-Term Assistant Who Asked for A Raise",
  "topic":"Business",
  "image":"https://images8.alphacoders.com/112/1128981.png",
  "paras": [
      "It’s early 2014 — the time when Mary Beth Brown decided to ask for a raise but never thought that it would put an end to her 12-year long professional relationship with Elon Musk. ",
      "Brown had been working for the modern-day Tony Stark Elon Musk for the last 12 years. She worked really hard as she would travel back and forth between Los Angeles and Silicon Valley every week, work late at night, and even on the weekends.",
      "She used to handle Musk’s scheduling across two companies (SpaceX and Tesla), manage public relations, and often help Musk make business decisions.",
      "Ashlee Vance, who told this story in his book “Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future,” described Brown like this",
      "Brown — or MB, as everyone called her — became Musk’s loyal assistant, establishing a real-life version of the relationship between Iron Man’s Tony Stark and Pepper Potts. If Musk worked a twenty-hour day, so too did Brown. Over the years, she brought Musk meals, set up his business appointments, arranged time with his children, picked out his clothes, dealt with press requests, and when necessary yanked Musk out of meetings to keep him on schedule. As a result, she would emerge as the only bridge between Musk and all of his interests and was an invaluable asset to the companies’ employees.",
      "Ashlee also mentioned that Brown had an outstanding contribution in developing SpaceX’s early culture as she paid close attention to every detail and helped balance the vibe around the office. ",
      "Anyway, Brown went to Musk and asked for a raise. To be specific, she wanted to be compensated as per SpaceX’s top executives. Do you know what Elon Musk told her in response? He told Brown to take a couple of weeks off so that he would realize how hard Brown’s responsibilities were. Actually, Musk wanted to realize how indispensable Brown was for him.",
      "So, Brown took a 2-week off and Musk took over her job.",
      "After the two weeks when Brown came to the office, Musk told her that he didn’t need her service anymore. It was a real shock to Brown. I mean no one gets fired for asking for a raise, right? ",
      "In the book, Ashlee wrote that this unceremonious event struck people inside SpaceX and Tesla, and it confirmed the lore around Musk’s cruel stoicism and lack of empathy.",
      "Musk claimed that he offered Brown another job with the same pay, but she refused and left the company. ",
      "Now the question is — why did Musk fire his long-term assistant who did everything right for Musk over the years? Is this all about asking for more money? Or, Did Brown fail to judge Musk even working for him for an incredibly long time? ", 
      "From Brown’s perspective, it’s apparent that she was confident about her contribution to the companies Musk owned, and therefore, she wanted Musk to treat her as a top soldier in his team." ,
      "But she indeed misunderstood Musk on this occasion as he considered the matter from a very realistic point of view overlooking all the previous contributions of Brown." ,
      "So, within just two weeks, Musk found Brown’s job is no longer required. I mean, for Musk — Brown failed to become indispensable. This article on theladders.com echoes the same as it says, “If you agree with Musk’s decision to fire his assistant from her role, it teaches you the importance of making yourself as indispensable as possible before asking for a raise. On the other hand, if you side with the assistant, it’s a valuable reminder to not go years with being underpaid and undervalued.”" ,
      "Anyway, this anecdote was refuted by Elon Musk, claiming that it is total nonsense. He tweeted by saying, Mary Beth was an amazing assistant for over ten years, but as company complexity grew, the role required several specialists vs one generalist.", 
      "Whatever the actual reason is, the anecdote teaches us a valuable lesson. And it’s not to take your job for granted.", 
      "No matter how many years you have been working for the company or how close you are to the management — you can be replaced at any moment. That’s the hard truth. So, be mentally prepared for that.",
      "And of course, before asking for a raise — don’t forget to give your boss at least a dozen reasons (if not many) why you deserve it."
  ]
},
  {
  "title":"EA says NFTs are part of the future of games industry",
  "topic":"Tech",
  "image":"https://ichef.bbci.co.uk/news/976/cpsprodpb/0D19/production/_121435330_gettyimages-1232967391.jpg",
  "paras": [
      "It’s early 2014 — the time when Mary Beth Brown decided to ask for a raise but never thought that it would put an end to her 12-year long professional relationship with Elon Musk. ",
      "Brown had been working for the modern-day Tony Stark Elon Musk for the last 12 years. She worked really hard as she would travel back and forth between Los Angeles and Silicon Valley every week, work late at night, and even on the weekends.",
      "She used to handle Musk’s scheduling across two companies (SpaceX and Tesla), manage public relations, and often help Musk make business decisions.",
      "Ashlee Vance, who told this story in his book “Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future,” described Brown like this",
      "Brown — or MB, as everyone called her — became Musk’s loyal assistant, establishing a real-life version of the relationship between Iron Man’s Tony Stark and Pepper Potts. If Musk worked a twenty-hour day, so too did Brown. Over the years, she brought Musk meals, set up his business appointments, arranged time with his children, picked out his clothes, dealt with press requests, and when necessary yanked Musk out of meetings to keep him on schedule. As a result, she would emerge as the only bridge between Musk and all of his interests and was an invaluable asset to the companies’ employees.",
      "Ashlee also mentioned that Brown had an outstanding contribution in developing SpaceX’s early culture as she paid close attention to every detail and helped balance the vibe around the office. ",
      "Anyway, Brown went to Musk and asked for a raise. To be specific, she wanted to be compensated as per SpaceX’s top executives. Do you know what Elon Musk told her in response? He told Brown to take a couple of weeks off so that he would realize how hard Brown’s responsibilities were. Actually, Musk wanted to realize how indispensable Brown was for him.",
      "So, Brown took a 2-week off and Musk took over her job.",
      "After the two weeks when Brown came to the office, Musk told her that he didn’t need her service anymore. It was a real shock to Brown. I mean no one gets fired for asking for a raise, right? ",
      "In the book, Ashlee wrote that this unceremonious event struck people inside SpaceX and Tesla, and it confirmed the lore around Musk’s cruel stoicism and lack of empathy.",
      "Musk claimed that he offered Brown another job with the same pay, but she refused and left the company. ",
      "Now the question is — why did Musk fire his long-term assistant who did everything right for Musk over the years? Is this all about asking for more money? Or, Did Brown fail to judge Musk even working for him for an incredibly long time? ", 
      "From Brown’s perspective, it’s apparent that she was confident about her contribution to the companies Musk owned, and therefore, she wanted Musk to treat her as a top soldier in his team." ,
      "But she indeed misunderstood Musk on this occasion as he considered the matter from a very realistic point of view overlooking all the previous contributions of Brown." ,
      "So, within just two weeks, Musk found Brown’s job is no longer required. I mean, for Musk — Brown failed to become indispensable. This article on theladders.com echoes the same as it says, “If you agree with Musk’s decision to fire his assistant from her role, it teaches you the importance of making yourself as indispensable as possible before asking for a raise. On the other hand, if you side with the assistant, it’s a valuable reminder to not go years with being underpaid and undervalued.”" ,
      "Anyway, this anecdote was refuted by Elon Musk, claiming that it is total nonsense. He tweeted by saying, Mary Beth was an amazing assistant for over ten years, but as company complexity grew, the role required several specialists vs one generalist.", 
      "Whatever the actual reason is, the anecdote teaches us a valuable lesson. And it’s not to take your job for granted.", 
      "No matter how many years you have been working for the company or how close you are to the management — you can be replaced at any moment. That’s the hard truth. So, be mentally prepared for that.",
      "And of course, before asking for a raise — don’t forget to give your boss at least a dozen reasons (if not many) why you deserve it."
  ]
},
  {
  "title":"Facebook's metaverse plans labelled as 'dystopian' and 'a bad idea'",
  "topic":"Tech",
  "image":"https://ichef.bbci.co.uk/news/976/cpsprodpb/A020/production/_121429904_gettyimages-1351042109.jpg",
  "paras": [
      "It’s early 2014 — the time when Mary Beth Brown decided to ask for a raise but never thought that it would put an end to her 12-year long professional relationship with Elon Musk. ",
      "Brown had been working for the modern-day Tony Stark Elon Musk for the last 12 years. She worked really hard as she would travel back and forth between Los Angeles and Silicon Valley every week, work late at night, and even on the weekends.",
      "She used to handle Musk’s scheduling across two companies (SpaceX and Tesla), manage public relations, and often help Musk make business decisions.",
      "Ashlee Vance, who told this story in his book “Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future,” described Brown like this",
      "Brown — or MB, as everyone called her — became Musk’s loyal assistant, establishing a real-life version of the relationship between Iron Man’s Tony Stark and Pepper Potts. If Musk worked a twenty-hour day, so too did Brown. Over the years, she brought Musk meals, set up his business appointments, arranged time with his children, picked out his clothes, dealt with press requests, and when necessary yanked Musk out of meetings to keep him on schedule. As a result, she would emerge as the only bridge between Musk and all of his interests and was an invaluable asset to the companies’ employees.",
      "Ashlee also mentioned that Brown had an outstanding contribution in developing SpaceX’s early culture as she paid close attention to every detail and helped balance the vibe around the office. ",
      "Anyway, Brown went to Musk and asked for a raise. To be specific, she wanted to be compensated as per SpaceX’s top executives. Do you know what Elon Musk told her in response? He told Brown to take a couple of weeks off so that he would realize how hard Brown’s responsibilities were. Actually, Musk wanted to realize how indispensable Brown was for him.",
      "So, Brown took a 2-week off and Musk took over her job.",
      "After the two weeks when Brown came to the office, Musk told her that he didn’t need her service anymore. It was a real shock to Brown. I mean no one gets fired for asking for a raise, right? ",
      "In the book, Ashlee wrote that this unceremonious event struck people inside SpaceX and Tesla, and it confirmed the lore around Musk’s cruel stoicism and lack of empathy.",
      "Musk claimed that he offered Brown another job with the same pay, but she refused and left the company. ",
      "Now the question is — why did Musk fire his long-term assistant who did everything right for Musk over the years? Is this all about asking for more money? Or, Did Brown fail to judge Musk even working for him for an incredibly long time? ", 
      "From Brown’s perspective, it’s apparent that she was confident about her contribution to the companies Musk owned, and therefore, she wanted Musk to treat her as a top soldier in his team." ,
      "But she indeed misunderstood Musk on this occasion as he considered the matter from a very realistic point of view overlooking all the previous contributions of Brown." ,
      "So, within just two weeks, Musk found Brown’s job is no longer required. I mean, for Musk — Brown failed to become indispensable. This article on theladders.com echoes the same as it says, “If you agree with Musk’s decision to fire his assistant from her role, it teaches you the importance of making yourself as indispensable as possible before asking for a raise. On the other hand, if you side with the assistant, it’s a valuable reminder to not go years with being underpaid and undervalued.”" ,
      "Anyway, this anecdote was refuted by Elon Musk, claiming that it is total nonsense. He tweeted by saying, Mary Beth was an amazing assistant for over ten years, but as company complexity grew, the role required several specialists vs one generalist.", 
      "Whatever the actual reason is, the anecdote teaches us a valuable lesson. And it’s not to take your job for granted.", 
      "No matter how many years you have been working for the company or how close you are to the management — you can be replaced at any moment. That’s the hard truth. So, be mentally prepared for that.",
      "And of course, before asking for a raise — don’t forget to give your boss at least a dozen reasons (if not many) why you deserve it."
  ]
},
  {
  "title":"The Popularity of E-Bikes Isn’t Slowing Down",
  "topic":"Future",
  "image":"https://static01.nyt.com/images/2021/11/08/multimedia/08sp-transportation-ebikes/08sp-transportation-ebikes-superJumbo.jpg?quality=75&auto=webp",
  "paras": [
      "It’s early 2014 — the time when Mary Beth Brown decided to ask for a raise but never thought that it would put an end to her 12-year long professional relationship with Elon Musk. ",
      "Brown had been working for the modern-day Tony Stark Elon Musk for the last 12 years. She worked really hard as she would travel back and forth between Los Angeles and Silicon Valley every week, work late at night, and even on the weekends.",
      "She used to handle Musk’s scheduling across two companies (SpaceX and Tesla), manage public relations, and often help Musk make business decisions.",
      "Ashlee Vance, who told this story in his book “Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future,” described Brown like this",
      "Brown — or MB, as everyone called her — became Musk’s loyal assistant, establishing a real-life version of the relationship between Iron Man’s Tony Stark and Pepper Potts. If Musk worked a twenty-hour day, so too did Brown. Over the years, she brought Musk meals, set up his business appointments, arranged time with his children, picked out his clothes, dealt with press requests, and when necessary yanked Musk out of meetings to keep him on schedule. As a result, she would emerge as the only bridge between Musk and all of his interests and was an invaluable asset to the companies’ employees.",
      "Ashlee also mentioned that Brown had an outstanding contribution in developing SpaceX’s early culture as she paid close attention to every detail and helped balance the vibe around the office. ",
      "Anyway, Brown went to Musk and asked for a raise. To be specific, she wanted to be compensated as per SpaceX’s top executives. Do you know what Elon Musk told her in response? He told Brown to take a couple of weeks off so that he would realize how hard Brown’s responsibilities were. Actually, Musk wanted to realize how indispensable Brown was for him.",
      "So, Brown took a 2-week off and Musk took over her job.",
      "After the two weeks when Brown came to the office, Musk told her that he didn’t need her service anymore. It was a real shock to Brown. I mean no one gets fired for asking for a raise, right? ",
      "In the book, Ashlee wrote that this unceremonious event struck people inside SpaceX and Tesla, and it confirmed the lore around Musk’s cruel stoicism and lack of empathy.",
      "Musk claimed that he offered Brown another job with the same pay, but she refused and left the company. ",
      "Now the question is — why did Musk fire his long-term assistant who did everything right for Musk over the years? Is this all about asking for more money? Or, Did Brown fail to judge Musk even working for him for an incredibly long time? ", 
      "From Brown’s perspective, it’s apparent that she was confident about her contribution to the companies Musk owned, and therefore, she wanted Musk to treat her as a top soldier in his team." ,
      "But she indeed misunderstood Musk on this occasion as he considered the matter from a very realistic point of view overlooking all the previous contributions of Brown." ,
      "So, within just two weeks, Musk found Brown’s job is no longer required. I mean, for Musk — Brown failed to become indispensable. This article on theladders.com echoes the same as it says, “If you agree with Musk’s decision to fire his assistant from her role, it teaches you the importance of making yourself as indispensable as possible before asking for a raise. On the other hand, if you side with the assistant, it’s a valuable reminder to not go years with being underpaid and undervalued.”" ,
      "Anyway, this anecdote was refuted by Elon Musk, claiming that it is total nonsense. He tweeted by saying, Mary Beth was an amazing assistant for over ten years, but as company complexity grew, the role required several specialists vs one generalist.", 
      "Whatever the actual reason is, the anecdote teaches us a valuable lesson. And it’s not to take your job for granted.", 
      "No matter how many years you have been working for the company or how close you are to the management — you can be replaced at any moment. That’s the hard truth. So, be mentally prepared for that.",
      "And of course, before asking for a raise — don’t forget to give your boss at least a dozen reasons (if not many) why you deserve it."
  ]
},
  {
  "title":"How to buy tech online without getting ripped off",
  "topic":"Tech",
  "image":"https://www.popsci.com/uploads/2019/10/07/Buy-Tech-Online.jpeg",
  "paras": [
      "It’s early 2014 — the time when Mary Beth Brown decided to ask for a raise but never thought that it would put an end to her 12-year long professional relationship with Elon Musk. ",
      "Brown had been working for the modern-day Tony Stark Elon Musk for the last 12 years. She worked really hard as she would travel back and forth between Los Angeles and Silicon Valley every week, work late at night, and even on the weekends.",
      "She used to handle Musk’s scheduling across two companies (SpaceX and Tesla), manage public relations, and often help Musk make business decisions.",
      "Ashlee Vance, who told this story in his book “Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future,” described Brown like this",
      "Brown — or MB, as everyone called her — became Musk’s loyal assistant, establishing a real-life version of the relationship between Iron Man’s Tony Stark and Pepper Potts. If Musk worked a twenty-hour day, so too did Brown. Over the years, she brought Musk meals, set up his business appointments, arranged time with his children, picked out his clothes, dealt with press requests, and when necessary yanked Musk out of meetings to keep him on schedule. As a result, she would emerge as the only bridge between Musk and all of his interests and was an invaluable asset to the companies’ employees.",
      "Ashlee also mentioned that Brown had an outstanding contribution in developing SpaceX’s early culture as she paid close attention to every detail and helped balance the vibe around the office. ",
      "Anyway, Brown went to Musk and asked for a raise. To be specific, she wanted to be compensated as per SpaceX’s top executives. Do you know what Elon Musk told her in response? He told Brown to take a couple of weeks off so that he would realize how hard Brown’s responsibilities were. Actually, Musk wanted to realize how indispensable Brown was for him.",
      "So, Brown took a 2-week off and Musk took over her job.",
      "After the two weeks when Brown came to the office, Musk told her that he didn’t need her service anymore. It was a real shock to Brown. I mean no one gets fired for asking for a raise, right? ",
      "In the book, Ashlee wrote that this unceremonious event struck people inside SpaceX and Tesla, and it confirmed the lore around Musk’s cruel stoicism and lack of empathy.",
      "Musk claimed that he offered Brown another job with the same pay, but she refused and left the company. ",
      "Now the question is — why did Musk fire his long-term assistant who did everything right for Musk over the years? Is this all about asking for more money? Or, Did Brown fail to judge Musk even working for him for an incredibly long time? ", 
      "From Brown’s perspective, it’s apparent that she was confident about her contribution to the companies Musk owned, and therefore, she wanted Musk to treat her as a top soldier in his team." ,
      "But she indeed misunderstood Musk on this occasion as he considered the matter from a very realistic point of view overlooking all the previous contributions of Brown." ,
      "So, within just two weeks, Musk found Brown’s job is no longer required. I mean, for Musk — Brown failed to become indispensable. This article on theladders.com echoes the same as it says, “If you agree with Musk’s decision to fire his assistant from her role, it teaches you the importance of making yourself as indispensable as possible before asking for a raise. On the other hand, if you side with the assistant, it’s a valuable reminder to not go years with being underpaid and undervalued.”" ,
      "Anyway, this anecdote was refuted by Elon Musk, claiming that it is total nonsense. He tweeted by saying, Mary Beth was an amazing assistant for over ten years, but as company complexity grew, the role required several specialists vs one generalist.", 
      "Whatever the actual reason is, the anecdote teaches us a valuable lesson. And it’s not to take your job for granted.", 
      "No matter how many years you have been working for the company or how close you are to the management — you can be replaced at any moment. That’s the hard truth. So, be mentally prepared for that.",
      "And of course, before asking for a raise — don’t forget to give your boss at least a dozen reasons (if not many) why you deserve it."
  ]
},
]