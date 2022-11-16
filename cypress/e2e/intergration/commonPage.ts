let index = 1;
export class CommonPage {
  // verifyElements() {
  //   return cy.get(this.mainPageUI.bodyUI).should('be.visible').then(() => {
  //     return this.navMenu.verifyElements();
  //   });
  // }

  // visit
  static enterUrl(url: string) {
    cy.visit(url);
  }

  // log
  static logUrl(url: string) {
    cy.log(url);
  }

  // clickGetElements
  static clickGetElements(elementFinder: string) {
    cy.get(elementFinder).should("be.visible").click({ force: true });
  }

  static clickElements(elementFinder: string) {
    cy.xpath(elementFinder).should("be.visible").click({ force: true });
  }
  static clickElementsMultiple(elementFinder: string) {
    cy.xpath(elementFinder).should("be.visible").click({ multiple: true });
  }

  //invoke
  static invokeXpathElements(ele1: string, ele2: string) {
    cy.xpath(ele1).invoke("show");
    cy.xpath(ele2).click({ force: true });
  }

  static typeValueNotElements(value: string) {
    cy.type(value);
  }
  static typeElements(elementFinder: string, value: string) {
    cy.xpath(elementFinder).should("be.visible").type(value);
  }

  static typeGetElements(elementFinder: string, value: string) {
    cy.get(elementFinder).should("be.visible").type(value);
  }

  static typeElementsEnter(elementFinder: string, value: string) {
    cy.xpath(elementFinder).should("be.visible").type(`${value}{enter}`);
  }

  static typeGetElementsEnter(elementFinder: string, value: string) {
    cy.get(elementFinder).should("be.visible").type(`${value}{enter}`);
  }

  static clearElements(elementFinder: string) {
    cy.xpath(elementFinder).should("be.visible").clear();
    console.log("test1");
  }

  static clearGetElements(elementFinder: string) {
    cy.get(elementFinder).should("be.visible").clear();
  }

  static typeSpaceElements(elementFinder: string) {
    cy.xpath(elementFinder).should("be.visible").type("  ");
  }

  static typeIncreaseGmailElements(elementFinder: string, value: string) {
    ++index;
    cy.xpath(elementFinder).type(`${value}+${index}@enouvo.com`);
  }

  static typeIncreaseDomainElements(elementFinder: string, value: string) {
    ++index;
    cy.xpath(elementFinder).type(`${value}${index}`);
  }

  static typeRandomGmailElements(elementFinder: string, value: string) {
    cy.xpath(elementFinder).type(
      `${value}+${this.randomStringNumber(3)}@enouvo.com`
    );
  }

  static typeRandomUsernameElements(elementFinder: string, value: string) {
    cy.xpath(elementFinder).type(value + this.randomStringNumber(3));
  }

  static drapAndDrop(elementFinder1: string, elementFinder2: string) {
    cy.xpath(elementFinder1).first().trigger("dragstart");
    cy.xpath(elementFinder2).trigger("drop");
  }

  // static uploadFilePdfDifferentInputBtn(elementFinder: string) {
  //   cy.fixture("2.pdf").then((fileContent) => {
  //     cy.get(elementFinder).upload(
  //       {
  //         fileContent,
  //         fileName: "2.pdf",
  //         mimeType: "otherFile/pdf",
  //       },
  //       { subjectType: "drag-n-drop" }
  //     );
  //   });
  // }

  // static uploadFileImageDifferentInputBtn(elementFinder: string) {
  //   cy.fixture("1.jpg").then((fileContent) => {
  //     cy.get(elementFinder).upload(
  //       {
  //         fileContent,
  //         fileName: "1.jpg",
  //         mimeType: "image/jpg",
  //       },
  //       { subjectType: "drag-n-drop" }
  //     );
  //   });
  // }

  // static uploadFileInputBtn(elementFinder: string) {
  //   cy.fixture("1.jpg").then((fileContent) => {
  //     cy.get(elementFinder).upload(
  //       {
  //         fileContent,
  //         fileName: "1.jpg",
  //         mimeType: "image/jpg",
  //       },
  //       { uploadType: "input" }
  //     );
  //   });
  // }

  static randomStringNumber(length: number) {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static verifyGetElements(elementFinder: string) {
    return cy.get(elementFinder).should("be.visible");
  }

  static verifyElements(elementFinder: string) {
    return cy.xpath(elementFinder).should("be.visible");
  }

  static verifyNotElements(elementFinder: string) {
    return cy.xpath(elementFinder).should("not.be.visible");
  }

  static verifyNotGetElements(elementFinder: string) {
    return cy.get(elementFinder).should("not.be.visible");
  }

  static verifyUncheckElements(elementFinder: string) {
    return cy.xpath(elementFinder).should("be.visible").uncheck();
  }

  static verifyElementsLenght(elementFinder: string, value: string) {
    return cy.xpath(elementFinder).should("have.lenght", value);
  }

  static scrollHeader() {
    return cy
      .get("header")
      .should("be.visible")
      .scrollIntoView({ duration: 2000 });
  }

  static hoverButton(elementFinder: string) {
    cy.xpath(elementFinder).trigger("mouseover", { force: true });
  }

  static hoverGetButton(elementFinder: string) {
    return cy.get(elementFinder).trigger("mouseover", { force: true });
  }

  static hoverImageCssDisplayIsNone(elementFinder: string) {
    return cy.xpath(elementFinder).invoke("show").click({ force: true });
  }

  static verifyXpathValueElement(elementFinder: string, value: string) {
    cy.xpath(elementFinder).should("have.value", value);
  }

  static verifyGetValueElement(elementFinder: string, value: string) {
    cy.get(elementFinder).should("have.value", value);
  }

  static verifyGetNotValueElement(elementFinder: string, value: string) {
    cy.get(elementFinder).should("have.not.value", value);
  }

  static verifyXpathClassElement(elementFinder: string, value: string) {
    cy.xpath(elementFinder).should("have.class", value);
  }

  static verifyGetClassElement(elementFinder: string, value: string) {
    cy.get(elementFinder).should("have.class", value);
  }

  static verifyGetTextElement(elementFinder: string, value: string) {
    cy.get(elementFinder).should("have.text", value);
  }

  static verifyXpathTextElement(elementFinder: string, value: string) {
    cy.xpath(elementFinder).should("have.text", value);
  }

  static verifyGetContainsElement(elementFinder: string, value: string) {
    cy.get(elementFinder).contains(value);
  }

  static verifyXpathContainsElement(elementFinder: string, value: string) {
    cy.xpath(elementFinder).contains(value);
  }

  static verifyXpathVisibleElement(elementFinder: string, time: number) {
    cy.xpath(elementFinder, { timeout: time }).should("be.visible");
  }

  static verifyIncludeUrl(url: string) {
    cy.url().should("include", url);
  }

  static verifyEqualUrl(url: string) {
    cy.url().should("eq", url);
  }

  //click button in alert
  static clickBtnInAlert(el: string) {
    cy.on("window:alert", () => {
      cy.xpath(el).click();
    });
  }

  // alert contain
  static verifyAlertContain(value: string) {
    cy.on("window:alert", (str) => {
      expect(str).to.contain(value);
    });
  }

  // alert not contain
  static verifyAlertNotContain(value: string) {
    cy.on("window:alert", (str) => {
      expect(str).not.to.contain(value);
    });
  }

  static wait(time: number) {
    cy.wait(time);
  }

  static reloadPage() {
    cy.reload();
    cy.wait(5000);
  }

  // waiting an element
  static waitToElement(elem: string, time: number) {
    cy.get(elem, { timeout: time }).should("be.visible");
  }

  static getTitleElement(elementFinder: string) {
    return new Promise((resolve, reject) =>
      cy.get(elementFinder).then(($elem) => {
        // console.log($elem.attr('title'), 'dddd');
        resolve($elem.attr("title"));
      })
    );
  }

  // scroll bottom
  static scrollToBottom() {
    cy.scrollTo("bottom");
  }

  // scroll element
  static scrollToElement(elem: string, x: number, y: number) {
    cy.get(elem).scrollTo(x, y);
  }

  // select element
  static selectToElement(elem: string, value: string) {
    cy.xpath(elem).select(value).should("have.value", value);
  }

  // select test in table
  static selectElementValue(elem: string, value: string) {
    cy.xpath(elem).select(value);
  }

  // get href and go
  static getXpathAttributHref(elem: string) {
    cy.xpath(elem).then(function ($a) {
      const href = $a.prop("href");
      cy.visit(href);
      cy.wait(1000);
    });
  }
  // contains
  static containsElement(value: string) {
    cy.contains("p", value);
  }
}
