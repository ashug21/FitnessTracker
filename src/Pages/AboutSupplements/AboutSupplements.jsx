import React from "react";
import './AboutSupplements.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import multivitamin from '../../assets/mullti.png'
import creatine from '../../assets/creatine.png'
import preworkout from '../../assets/preworkout.png'
import omega from '../../assets/omega3.png'
import proteinpowder from '../../assets/proteinpowder.png'
import bcaa from '../../assets/bcaa.png'
import l from '../../assets/l.png'
import glutamine from '../../assets/glutamine.png'
import ashvagandha from '../../assets/ashwa.png'
import mangesium from '../../assets/mange.png'


export default function AboutSupplements() {

  const data = [
    {
      title: "Protein Powder",
      img: proteinpowder,
      text: "Protein powder is one of the most widely used supplements in the fitness industry because it provides a quick and convenient source of high-quality protein. It helps repair damaged muscle fibers after training, enhances muscle growth, and supports overall recovery. For people who struggle to meet their daily protein requirements through food alone, protein powder becomes an easy and effective nutritional tool.",
    },
    {
      title: "Creatine Monohydrate",
      img: creatine,
      text: "Creatine is one of the most researched and proven supplements for increasing strength, power output, and workout performance. It helps your muscles replenish ATP—the primary energy source used during high-intensity training—allowing you to lift heavier, perform more reps, and recover faster between sets. Regular creatine use also helps increase muscle fullness and long-term strength gains.",
    },
    {
      title: "Pre-Workout",
      img: preworkout,
      text: "Pre-workout supplements are designed to increase energy, boost mental focus, and improve endurance during exercise. They often contain caffeine, nitric oxide boosters, beta-alanine, and other performance-enhancing ingredients. The goal is to help you push harder, maintain intensity throughout your workout, and overcome fatigue—that too with better focus and motivation.",
    },
    {
      title: "Omega-3 Fish Oil",
      img: omega,
      text: "Omega-3 fatty acids support cardiovascular health, improve blood flow, and reduce inflammation throughout the body. For active individuals, Omega-3 helps with joint flexibility, recovery, and long-term mobility. It also supports brain function, hormone balance, and overall wellbeing, making it one of the most beneficial daily supplements for both fitness and general health.",
    },
    {
      title: "Multivitamins",
      img: multivitamin,
      text: "A good multivitamin helps fill nutritional gaps that can occur from an imperfect diet or high physical activity. It provides essential vitamins and minerals that support immunity, metabolism, energy production, and overall bodily function. For people who train regularly, multivitamins help maintain consistent health and prevent deficiencies that could affect performance or recovery.",
    },
    {
      title: "BCAA",
      img: bcaa,
      text: "BCAAs — leucine, isoleucine, and valine — help reduce muscle fatigue, boost endurance, and improve muscle recovery during and after training. They are especially useful during long or intense workouts, where muscle breakdown is higher. Many athletes use BCAAs intra-workout to maintain energy levels, minimize soreness, and support lean muscle preservation while cutting fat." 
    },
    {
      title: "L-Carnitine",
      img: l,
      text: "L-Carnitine helps transport fatty acids into the mitochondria, where they’re burned for energy. This makes it one of the most popular supplements for fat loss and improved metabolic performance. Regular use can help increase endurance, reduce fatigue, and improve overall workout efficiency — especially when combined with cardio or high-intensity training."  
    },
    {
      title: "Glutamine",
      img: glutamine,
      text: "Glutamine supports muscle recovery, immune function, and gut health. Since intense training can reduce glutamine levels in the body, supplementing helps speed up recovery, reduce soreness, and support muscle repair. It’s also commonly used by athletes who experience fatigue or want to maintain lean muscle during cutting phases." 
     },

     {
      title: "Ashwagandha",
      img: ashvagandha,
      text: "Ashwagandha is known for reducing stress, improving recovery, and supporting strength gains. It helps lower cortisol levels — the hormone responsible for muscle breakdown and fatigue. Many athletes use Ashwagandha to improve sleep quality, increase testosterone naturally, and boost overall workout performance and mental focus."
     },

     {
      title: "Magnesium",
      img: mangesium,
      text: "Magnesium supports muscle function, energy production, sleep quality, and recovery. Intense training can deplete magnesium levels, leading to cramps, fatigue, and low performance. Supplementing magnesium helps improve muscle relaxation, reduces soreness, and supports overall energy metabolism — making it a valuable daily supplement."
      },

  ];

  return (
    <div>
      <Navbar />

      <div className="supplements-wrapper25">

        <h1 className="supplements-heading25">Popular Fitness Supplements</h1>
            <br/>  <br/>  
            <p className="supplement-disclaimer25">
  *Disclaimer: Supplements can support fitness goals, but results vary for each person. They are not a substitute for medical treatment. Consult a healthcare or nutrition professional before starting any new supplement, especially if you have medical conditions or take medications.*
</p>

<br/>  <br/>
        <div className="supplements-grid25">
          {data.map((item, index) => (
            <div key={index} className="supplement-card25">

              <div className="supplement-img-box25">
                <img src={item.img} alt={item.title} className="supplement-img25" />
              </div>

              <div className="supplement-content25">
                <h3 className="supplement-title25">{item.title}</h3>
                <p className="supplement-text25">{item.text}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </div>
  );
}
