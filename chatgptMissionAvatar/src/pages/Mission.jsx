import styles from "./Mission.module.css";
import { useEffect } from "react";
import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display/cubism4";
import ChatComponent from "../component/ChatComponent"

window.PIXI = PIXI;

Live2DModel.registerTicker(PIXI.Ticker);
// register InteractionManager to make Live2D models interactive
PIXI.Renderer.registerPlugin("interaction", PIXI.InteractionManager);

const Mission = () => {
  useEffect(() => {
    const app = new PIXI.Application({
      view: document.getElementById("canvas"),
      autoStart: true,
      resizeTo: window,
    });

    Live2DModel.from("public/resources/GirlCharacter/mao_pro_t02.model3.json", {
      idleMotionGroup: "Idle",
    }).then((model) => {
      app.stage.addChild(model);
      model.anchor.set(0.5, 0.5);
      model.position.set(window.innerWidth / 2, window.innerHeight / 2);
      model.scale.set(0.09, 0.09);

      model.on("pointertap", () => {
        model.motion("Tap@Body");
      });
    });
  }, []);
  return (
    <div className={styles.mission}>
      <div className={styles.header14Wrapper}>
        <div className={styles.header14}>
          <div className={styles.placeholderLightbox}>
            <div className={styles.placeholderLightboxInner}>
              <div className={styles.oneCatToRuleAllChainsParent}>
                <div className={styles.oneCatTo}>
                  ONE CAT TO RULE ALL CHAINS
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.linkWrapper}>
                    <b className={styles.link}>Mission</b>
                  </div>
                  <div className={styles.linkContainer}>
                    <b className={styles.link1}>
                      OmniCat is the first omnichain culture coin, built to
                      showcase and innovate omnichain technology. We're a
                      community driven project built by contributors from all
                      over the world.Our thesis is simple: the future is
                      omnichain. Anyone who also believes in this thesis is
                      welcome to join our community.
                    </b>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.linkWrapper}>
                    <b className={styles.link}>Bridge your $Omni Now</b>
                  </div>
                  <div className={styles.image6Parent}>
                    <img
                      className={styles.image6Icon}
                      alt=""
                      src="/image-6@2x.png"
                    />
                    <div className={styles.heading}>Stargate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navbar2}>
              <div className={styles.container}>
                <div className={styles.column}>
                  <img
                    className={styles.omnicatIcon}
                    alt=""
                    src="/omnicat.svg"
                  />
                </div>
                <div className={styles.column1}>
                  <b className={styles.text}>Mission</b>
                  <b className={styles.text}>Terminal</b>
                  <b className={styles.text}>Ecosystem</b>
                  <b className={styles.text}>Statistics</b>
                </div>
                <div className={styles.column2}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/subtract.svg"
                    />
                  </div>
                </div>
                
              </div>
              
            </div>
            <canvas id="canvas" />
            <ChatComponent/>
          </div>
          
        </div>
        
      </div>
      <div className={styles.footer4}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
            <b className={styles.link7}>The First ever Multichain Memecoin</b>
          </div>
          <div className={styles.links}>
            <b className={styles.text}>Link One</b>
            <b className={styles.text}>Link Two</b>
            <b className={styles.text}>Link Three</b>
            <b className={styles.text}>Link Four</b>
            <b className={styles.text}>Link Five</b>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/subtract.svg" />
            </div>
          </div>
        </div>
        <b className={styles.link7}>© All rights reserved, 2024</b>
        <div className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <b className={styles.text}>2023 Relume. All right reserved.</b>
            <div className={styles.row}>
              <b className={styles.link14}>Privacy Policy</b>
              <b className={styles.link14}>Terms of Service</b>
              <b className={styles.link14}>Cookies Settings</b>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Mission;
