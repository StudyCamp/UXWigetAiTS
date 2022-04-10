import React, { useState, useEffect } from 'react'
import { Button, ToggleButtonGroup, Container, Row, Col, ButtonGroup, ToggleButton } from "react-bootstrap";

interface chartButton {
    id: number; 
    name: string; 
    value: string
    checked: boolean
}
interface chartToggleButtonGroup {
        section: string;
        buttons: chartButton[];
  }


const HomePage = () => {

    const [commandInfo, setCommandInfo] = useState<string>('conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch')
    const [allCheckedButtons, setAllCheckedButtons] = useState<number[]>()
    const [allButtonGroup, setAllButtonGroup] = useState<chartToggleButtonGroup[]>([
        {
            section: "build",
            buttons:[
                { id: 1, name: 'Stable (1.11.0)', value: '1', checked: true },
                { id: 2, name: 'Preview (Nightly)', value: '2', checked: false },
                { id: 3, name: 'LTS (1.8.2)', value: '3', checked: false },
            ],
        },

        {
            section: "os",
            buttons:[
                { id: 4, name: 'Linux', value: '4' , checked: true},
                { id: 5, name: 'Mac', value: '5' , checked: false},
                { id: 6, name: 'Windows', value: '6' , checked: false},
            ]
        },
        {
            section: "Package",
            buttons:[
                { id: 7, name: 'Conda', value: '7' , checked: true},
                { id: 8, name: 'Pip', value: '8' , checked: false},
                { id: 9, name: 'LibTorch', value: '9' , checked: false},
                { id: 10, name: 'Source', value: '10' , checked: false},
            ]
        },
        {
            section: "Language",
            buttons:[
                { id: 11, name: 'Python', value: '11' , checked: true},
                { id: 12, name: 'C++/Java', value: '12' , checked: false},
            ]
        },
        {
            section: "Compute Platform",
            buttons:[
                { id: 13, name: 'CUDA 10.2', value: '13' , checked: true},
                { id: 14, name: 'CUDA 11.3', value: '14' , checked: false},
                { id: 15, name: 'ROCm 4.5.2(beta)', value: '15' , checked: false},
                { id: 16, name: 'CPU', value: '16' , checked: false},
            ]
        },
    ]);

    let updateChecked = (section:string, id:number):void => {
        const newButtonGroup:chartToggleButtonGroup[]= allButtonGroup.map(btnGroup=> {
            if(btnGroup.section === section) {
                btnGroup.buttons.map(btn => {
                    if (btn.id === id) {
                        btn.checked? btn.checked = false : btn.checked =true;
                    } else {
                        btn.checked? btn.checked = false : btn.checked = false;
                    } 
                })
            } 
            return btnGroup;
        })
        setAllButtonGroup(newButtonGroup);
    }

    let findAllCheckedButtons = ():void => {
        // Find all checked buttons
        let idData:number[];
        allButtonGroup.map(btnGroup=> {
            btnGroup.buttons.map(button => {
                if(button.checked === true) {
                    idData.push(button.id)
                    console.log(idData)
                }   
            }) 
            setAllCheckedButtons(idData);
    
        })
    }

  return (
    <>
    <Container className='chartContainer'>
        <Row>
            <Col className='chartCol'>
                <p className='chartSection'>Leon's Alexis AI Build</p>
            </Col>
            <Col>
                <ToggleButtonGroup type="radio" name="radio">
                    {allButtonGroup[0].buttons.map((button:chartButton, idx:number) => (
                        <ToggleButton className='chartButton'
                            style={button.checked? {backgroundColor:'#a64dff'} : {backgroundColor: 'white'} }
                            key={idx}
                            id={`radio-${button.id}`}
                            type="radio"
                            variant="outline-warning"
                            name="build"
                            value={button.value}
                            onClick={() => updateChecked(allButtonGroup[0].section, button.id)}
                            // onClick={() => button.checked? button.checked=false:button.checked=true}
                            // checked={button.checked === true}
                            // onChange={(e) => setBuildSelectedValue(e.currentTarget.value)}
                        >
                            {button.name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col className='chartCol'>
                <p className='chartSection'>Your OS (true / false)</p>
            </Col>
            <Col>
                <ToggleButtonGroup type="radio" name="radio">
                    {allButtonGroup[1].buttons.map((button:chartButton, idx:number) => (
                        <ToggleButton className='chartButton'
                            style={button.checked? {backgroundColor:'#a64dff'} : {backgroundColor: 'white'} }
                            key={idx}
                            id={`radio-${button.id}`}
                            type="radio"
                            variant="outline-warning"
                            name="os"
                            value={button.value}
                            onClick={() => updateChecked(allButtonGroup[1].section, button.id)}
                        >
                            {button.name}  {button.checked.toString()} 
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col className='chartCol'>
                <p className='chartSection'>Package</p>
            </Col>
            <Col>
                <ToggleButtonGroup type="radio" name="radio">
                    {allButtonGroup[2].buttons.map((button:chartButton, idx:number) => (
                        <ToggleButton className='chartButton'
                            style={button.checked? {backgroundColor:'#a64dff'} : {backgroundColor: 'white'} }
                            key={idx}
                            id={`radio-${button.id}`}
                            type="radio"
                            variant="outline-warning"
                            name="os"
                            value={button.value}
                            onClick={() => updateChecked(allButtonGroup[2].section, button.id)}
                        >
                            {button.name} 
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col className='chartCol'>
                <p className='chartSection'>Language</p>
            </Col>
            <Col>
                <ToggleButtonGroup type="radio" name="radio">
                    {allButtonGroup[3].buttons.map((button:chartButton, idx:number) => (
                        <ToggleButton className='chartButton'
                            style={button.checked? {backgroundColor:'#a64dff'} : {backgroundColor: 'white'} }
                            key={idx}
                            id={`radio-${button.id}`}
                            type="radio"
                            variant="outline-warning"
                            name="os"
                            value={button.value}
                            onClick={() => updateChecked(allButtonGroup[3].section, button.id)}
                        >
                            {button.name} 
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col className='chartCol'>
                <p className='chartSection'>Compute Platform</p>
            </Col>
            <Col>
                <ToggleButtonGroup type="radio" name="radio">
                    {allButtonGroup[4].buttons.map((button:chartButton, idx:number) => (
                        <ToggleButton className='chartButton'
                            style={button.checked? {backgroundColor:'#a64dff'} : {backgroundColor: 'white'} }
                            key={idx}
                            id={`radio-${button.id}`}
                            type="radio"
                            variant="outline-warning"
                            name="os"
                            value={button.value}
                            onClick={() => updateChecked(allButtonGroup[4].section, button.id)}
                        >
                            {button.id !== 15?button.name:<span style={{ textDecorationLine: 'line-through' }}>ROCm 4.5.2(beta)</span>} 
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <h6 className='commandSectionTitle'>Run this Command:</h6>
                <p className='commandSection'>{commandInfo}</p>
            </Col>
        </Row>
    </Container>
     
      
    </>
    
  )
}

export default HomePage