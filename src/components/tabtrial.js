import React from 'react'
import '../css/tabs.css'

class Tabs extends React.Component {
    constructor(props) {
      super();
      this.state = {
        active: 0
      }
    }
    
    select = (i) => {
      let _this = this;
      return function() {
        _this.setState({
          active: i
        });
      }
    }
    
    renderTabs = () => {
      return React.Children.map(this.props.children, (item, i) => {
        if (i%2 === 0) {
          let active = this.state.active === i ? 'active' : '';
          return <a onClick={this.select(i)} className={`${active} tab`}>{item}</a>;
        }
      });
    }
    
    renderContent() {
      return React.Children.map(this.props.children, (item, i) => {
        if (i-1 === this.state.active) {
          return <div className='content'>{item}</div>;
        } else {
          return;
        }
      });
    }
    
    render() {
      return (
        <div className="element">
          {this.renderTabs()}
          {this.renderContent()}
        </div>
      );
    }
  }

  
  class TabTrial extends React.Component {
    render() {
      return (
        <div >
          <Tabs >
            About Me
                <span>  I've loved Gundam since I was a young boy. I grew up watching Gundam Wing on Toonami, and G Gundam later on online. As I grew older,
      I spent more time branching out into the shows, eventually watching Universal Century and now Gundam 00 and Unicorn Gundam. My first Gunpla (or model kit)
      was a high grade Deathscythe from Gundam Wing. I was so excited to build it that I didn't wait for my parents help and, though I was able
      to finish the model, I did a terrible job in making the build nice and clean. Since then I've built a multitude of kits, from master
      grades to real grades and have vastly expanded my skill. I've loved every minute of the hobby, from learning new materials to use in scratch building
      to how to effectively panel line and detail beautiful models. Please take the time to browse both my write ups on specific tools, materials and techniques. 
      And while you're at it, check out the photos of builds I've done! <br/><br/>
     Thanks, <br/>
     Matt</span>
            Kit Grades
            <Tabs >
                High Grade
                <span>High Grade kits are the most collectible because the line-up of Gundams and mobile suits in this grade, whether it be a protagonist’s or 
                    an antagonist’s mobile suit, is vast and High Grades are one of the most affordable grades available aside from the Super Deformed kits.
                <br/>
                <br/>
                High Grade kits have two scales: 1/144 which is around 13 cm tall. Some models are a little bit taller like Sinanju and Sazabi, 
                while some HG models are somewhat shorter like Exia. 1/144 kits are nice to collect and display because they occupy less space than Master Grade or Perfect 
                Grade kits.</span>
                Master Grade
                <span>Master Grade kits only have the 1/100 scale which are usually around 18 cm tall. Some recent MG kits are much larger like the MG Sazabi Ver. Ka and 
                    MG Unicorn Full Armor. MG kits have the “MG” abbreviation on the box art, which is colored gold so that you don’t miss the labelling. The kit box sizes 
                    vary depending on the number of assembly parts with the largest being from models like the MG Sazabi Ver. Ka.
                <br/>
                <br/>
                The details of an MG kit is where it starts to get very interesting and amazing. The big difference between an HG and an MG kit is that MG kits have an inner 
                frame or skeleton mechanic where you put on the armor pieces one by one just like a Samurai warrior would do when preparing for a battle. Color variation and 
                separation of the armor pieces are also well designed; most MG kits don’t need additional painting since they already look awesome straight from the box like 
                HG kits. Some MG kits also include some LED light-up mechanics.
                </span>
                Real Grade
                <span>The RG kit’s level of detail are comparable to PG kits. Articulation in RG kits is as best as it can get, armor color variation and separation is also 
                    at its finest in RG kits. They are heavy on decals, too. Now you know why it is called “Real” Grade, because the goal of this model grade line-up is to 
                    produce the most realistic but affordable Gundam and mobile suit model kits available. To pick out this kit grade, look for “Excitement embodied” on the 
                    box art and the abbreviation “RG”.</span>
                Perfect Grade
                <span>Perfect Grade 1/60 scale kits are around 30 cm tall. They’re the tallest Gundam models that you can build, and take up a lot of display space! So, you 
                    must prepare your display area well. In essence, they are Master Grade kits with so much detail they will blow your mind away. They also include decals 
                    like MG kits and usually have LED light-up mechanics, too! They cost a lot of money, but as in all Gunpla model kits, they are worth it. Especially when 
                    you’re an enthusiastic Gunpla modeler/hobbyist who wants to take their hobby to the next level!</span>
            </Tabs>    
            Tools
            <span>
                Nippers: nippers are essential for removing the parts of a kit from thier runners. A good set is thin and sharp and so will leave little stress marks on the
                pieces being removed. 
                <br/>
                <br/>
                Examples: 
                <br/>
                <a href="https://www.amazon.com/gp/product/B00T5IH8PI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00T5IH8PI&linkCode=as2&tag=gunpla101-20&linkId=356996a2a0a6ba361daaa3ae46fe6bac">God hand Nippers</a>
                <br/>
                          <a href="https://www.amazon.com/Gundam-Planet-Premium-Nipper-Plastic/dp/B012TMXDAU/ref=as_sl_pc_qf_sp_asin_til?tag=gunpla101-20&linkCode=w00&linkId=61f2cd4f5318dc169107a5040b0186cd&creativeASIN=B012TMXDAU"> Gundam Planet Nippers</a>
                <br/>
                <br/>
                Gundam Markers: gundam markers are essential in making a finished kit "pop". They are use din the panel line sof the finished model and give it depth.
                <br/>
                <br/>
                Examples:
                <br/>
                <a href="https://www.amazon.com/Gundam-Marker-Value-GM01-Black/dp/B00HY93GHY/ref=as_sl_pc_qf_sp_asin_til?tag=gunplapreorders-20&linkCode=w00&linkId=3735500b3b9f3da8ca9a9433b4f606c6&creativeASIN=B00HY93GHY">Gundam Markers</a>
            </span>
            Paints
            <Tabs>
            Tamiya
            <span>Under Construction</span>
            Vallejo
            <span>Under Construction</span>
            Citadel
            <span>Under Construction</span>
            Testors
            <span>Under Construction</span>  
            </Tabs>
            Materials
            <span>Under Construction</span> 
            Scribing
            <span>Under Construction</span>
          </Tabs>
        </div>
      );
    }
  }
  
export default TabTrial