/// <reference types = "cypress"/>
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'

describe("webcontrol",()=>{
    it("checkbox",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').click()
        cy.get('#checkBoxOption1').should('be.checked').should('have.value',"option1")
        cy.get('input[type="checkbox"]').check(['option1','option2'])
    });
    it("radiobutton",()=>{
        
        cy.get('[for="radio1"] > .radioButton').click()
        cy.get('[for="radio1"] > .radioButton').should('be.checked')
    });
    it("dropdown",()=>{
        //Static dropdown
        //Select() is to slect a option from a dropdown
        cy.get("select").select("option1").should("have.value","option1")
    
        //Dynamic dropdown
        cy.get('#autocomplete').type("ind")
        cy.get(".ui-menu-item div").each((ele, index, list)=>{
            if (ele.text()==="India")
            {
                ele.click()
            }
        })        
    });
    it("visibility of the element",()=>{
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")

    });
    it("alert",()=>{
        // In this below code we cant see alert getting opened as it is by default accepted by Cypress
        cy.get("#alertbtn").click()

        // But there us another way to manage alert using window:alert event
        cy.on("window:alert",(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //some pop-up have button to accept some things so we use window:confirm()
        cy.get('#confirmbtn').click()
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    });

    it("new tab",()=>{
        /*Cypress wont allow you to work new opened tabs. It doesn't support new tab workings.
So we have to use indirect method where we change the HTML so that the new tab will open in current window.
we can use JQuery() to modify the html. The HTML uses target attribute to open link in new tab. So we have to remove that attribute.
So we use invoke() method from cypress to run a Jquery funation().
cy.get("#opentab").invoke("removeAttr", 'target').click()*/

        cy.get("#opentab").invoke("removeAttr",'target').click()
        cy.url().should('have.include',"rahulshettyacademy")
        //to go forward and backward
        cy.go("back")
       
        });
        it("child window",()=>{
            /*Cypress wont allow you to work child windows.
            So we have to use indirect method where we change the HTML so that the child window will open in current window.
    we can use JQuery() to modify the html. The HTML uses target attribute to open link in new tab. So we have to remove that attribute.
    So we use invoke() method from cypress to run a Jquery funation().
    cy.get("#opentab").invoke("removeAttr", 'target').click()*/
    
            cy.get("#opentab").invoke("removeAttr",'target').click()
            cy.url().should('have.include',"rahulshettyacademy")
            //to go forward and backward
            cy.go("back")

            // //Second method is to get an atrribute of href from the element and then visit that url:
            // cy.get(".class").then((element)=>{

            //     // element.prop() is a jquery method
             
            //      let url=element.prop('href')
             
            //  })
           
            });

        it("table",()=>{
            //Here to get the 2nd column only we are using nth-child(2) in css
            cy.get("table[id='product'] tr td:nth-child(2)").as("allrows")

            cy.get("@allrows").each((ele,index,list)=>{
                if (ele.text()==="Master Selenium Automation in simple Python Language"){

                    // here we are using .next() method from cypress nto get to next sibling which is price
                   cy.get("@allrows").eq(index).next().then((price)=>{    
                        expect(price.text()).to.equal("25")
                    })
                    
                }
            }
        )});

        it("mouse over and hidden element",()=>{
            //click on hidden button we can set force:true in click function
            cy.get('.mouse-hover-content').find("a[href='#top']").click({force:true})
            
            //To make visible using mouse hover using jQuery and then click
            cy.get('.mouse-hover-content').invoke("show")
            cy.get("a[href='#top']").click()
            cy.url().should("include","top")
            }
        );

        it("Iframes",()=>{
            //to work with frames we need to first load that frame using:
            cy.frameLoaded("#courses-iframe")
            //Then to execute command sin that frame:
            cy.iframe().find("a[href='#/mentorship']").eq(0).click()
            }
        );
  


})