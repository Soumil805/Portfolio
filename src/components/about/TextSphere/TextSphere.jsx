import React, { useEffect } from "react";
import "./TextSphere.scss"
import TagCloud from "TagCloud"

export default function TextSphere(){
    useEffect(() => {

        const container = '.tagcloud';
        let radii;
        const texts = [
          'HTML',
          'CSS',
          'PostgresSQL',
          'JavaScript',
          'React',
          'NodeJS',
          'Webflow',
          'Jquery',
          'Motoko',
          'Web3',
          'Figma',
          'python',
          'APIs'
        ];
    
        function radiusValue() {
          if (window.screen.width <= 778) {
            radii = 120;
          } else {
            radii = 290;
          }
          return radii;
        }
    
        const options = {
          radius: radiusValue(),
          maxSpeed: 'fast',
          initSpeed: 'fast',
          keep: true,
        };
    
        TagCloud(container, texts, options);
      }, []);
    return (
        
        <div className="text-sphere">
            <span className="tagcloud"></span>
        </div>
        
    );
    
}