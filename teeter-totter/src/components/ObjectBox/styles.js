import Styled from 'styled-components'

export const StyledObjects = Styled.div`
display: flex; 
justify-content: center; 
align-items: center; 

.main-box {
    display: flex; 
    justify-content: space-between; 
    align-items: center;  
    width: 800px; 
    height: 610px; 

    .left-box {
        display: flex; 
        flex-direction: column; 
        height: 200px; 
        width: 200px; 
        position: relative; 
        
    
        .boxes {
            display: flex;

            .triangle {
                width: 0;
                height: 0;
                border-left: 25px solid transparent;
                border-right: 25px solid transparent;
                border-bottom: 50px solid blue;
                display: flex; 
                justify-content: center; 
                align-items: flex-start; 
                margin-right: 5px; 
            }
            .circle {
                height: 50px;
                width: 50px;
                border-radius: 50%; 
                background-color: red;
                margin-right: 5px; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
            }
            
            .rectangle {
                height: 50px;
                width: 100px;
                background-color: yellow;
                margin-right: 5px; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
            }
        }
        
}

.right-box {
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    align-items: center; 
    height: 200px; 
    width: 200px; 
    position: relative; 

    .boxes {
        .triangle {
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 50px solid blue;
            display: flex; 
            justify-content: center; 
            align-items: flex-start; 
            margin-right: 5px; 
        }
        .circle {
            height: 50px;
            width: 50px;
            border-radius: 50%; 
            background-color: red;
            margin-right: 5px; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
        }
        
        .rectangle {
            height: 50px;
            width: 100px;
            background-color: yellow;
            margin-right: 5px; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
        }
    }  
}

`