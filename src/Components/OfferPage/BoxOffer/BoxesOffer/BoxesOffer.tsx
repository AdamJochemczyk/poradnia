import { PACKAGES } from "src/Utilities/mocks";
import {
    Paragraph,
    TextContainer,
    UnorderedList,
    UnorderedListItem,
} from "../..";
import { Button } from "src/Components/Buttons/Button";
import styles from "./BoxesOffer.module.scss";

export const BoxesOffer = () => {

  const handleOfferPick=(name:string)=>{
    const textArea=document.querySelector("#contactFormText")
    const contactSection=document.querySelector("#contact")
    if (textArea && contactSection) {
      //@ts-ignore
      textArea.value = `Wybieram pakiet: ${name.toLowerCase()}`;
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={styles.boxesOfferMainContainer}>
      {PACKAGES.map((itemPackage) => (
        <div key={itemPackage.title} className={styles.boxOfferPackages}>
          <div className={styles.boxOfferPackages__withButton}>
            <TextContainer styleName="halfScreenOnMobile">
              <p className={styles.boxOfferPackages__title__large}>
                {itemPackage.title}
              </p>
              {itemPackage.additionalTitle.map((additionalTitleItem) => (
                <p
                  key={additionalTitleItem}
                  className={styles.boxOfferPackages__title}
                >
                  {additionalTitleItem}
                </p>
              ))}
              {itemPackage.extraTitle && (
                <p className={styles.boxOfferPackages__title}>
                  {/* Line-through price in packages. */}
                  <span>
                    {itemPackage.extraTitle.substring(
                      0,
                      itemPackage.extraTitle.indexOf("zł") + 2
                    )}
                  </span>{" "}
                  {/* Normal price in packages. */}
                  {itemPackage.extraTitle.substring(
                    itemPackage.extraTitle.indexOf("zł") + 2
                  )}
                </p>
              )}
            </TextContainer>
            <div>
              <Button
                text="Wybieram"
                styleName="hideOnDesktop"
                handleClick={() => handleOfferPick(itemPackage.title)}
              />
            </div>
          </div>
          <div>
            {itemPackage.paragraphs.map((paragraph, index) => {
              const [prefix, suffix] = paragraph.split(
                /(rozpoczynających przygodę z dietetykiem\.|chcących realizować swoje większe cele dietetyczne\.|które chcą osiągać więcej\.)/
              );
              return (
                <Paragraph
                  key={index}
                  text={prefix}
                  spanText={suffix}
                  styleName="smallPackages"
                />
              );
            })}
          </div>
          <div>
            <UnorderedList>
              {itemPackage.list.map((listItem) => (
                <UnorderedListItem key={listItem} text={listItem} />
              ))}
            </UnorderedList>
          </div>
          <Button
            text="Wybieram"
            styleName="showOnDesktop"
            handleClick={() => handleOfferPick(itemPackage.title)}
          />
        </div>
      ))}
    </div>
  );
};
