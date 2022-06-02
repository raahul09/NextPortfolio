import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 65px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: none;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  text-align:center;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 300px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
// New Card

export const Shape = styled.div`
height: 200px;
width: 200px;
position: absolute;
border-radius: 50%;
overflow: hidden;

&:last-child {
  background:linear-gradient(to right,#84a0b00d,#00000000);
  right: -30px;
  bottom: -80px;
  z-index: -1;
}

&:first-child {
  background: linear-gradient(#655d00,#85750000);
  left: -80px;
  top: -80px;
  z-index: -1;
}

  @media ${props => props.theme.breakpoints.md}{
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0px;
  }
`
export const Shape2 = styled.div`
height: 200px;
width: 200px;
position: absolute;
border-radius: 50%;
overflow: hidden;

&:last-child {
  background:linear-gradient(to right,#84a0b00d,#00000000);
  right: -30px;
  bottom: -80px;
  z-index: -1;
}

&:first-child {
  background: linear-gradient(#650000,#85750000);
  left: -80px;
  top: -80px;
  z-index: -1;
}

  @media ${props => props.theme.breakpoints.md}{
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0px;
  }
`
export const Shape3 = styled.div`
height: 200px;
width: 200px;
position: absolute;
border-radius: 50%;
overflow: hidden;

&:last-child {
  background:linear-gradient(to right,#84a0b00d,#00000000);
  right: -30px;
  bottom: -80px;
  z-index: -1;
}

&:first-child {
  background:linear-gradient(#005f65,#85750000);
  left: -80px;
  top: -80px;
  z-index: -1;
}

  @media ${props => props.theme.breakpoints.md}{
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0px;
  }
`


export const CardWrapper = styled.div`
  cursor:pointer;
  position: relative;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  box-sizing: border-box;

  &:hover {
    border: 2px solid #fff;
  }
  @media ${props => props.theme.breakpoints.md}{
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0px;
  }
`
export const ImageArea = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:15px;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  
  @media ${props => props.theme.breakpoints.md}{
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0px;
  }
`
export const InnerArea = styled.div`
height: calc(100% - 25px);
width: calc(100% - 25px);
border-radius: 50%;
  
  @media ${props => props.theme.breakpoints.md}{
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0px;
  }
`
export const Innerimg = styled.img`
height: 100%;
width: 100%;
border-radius: 50%;
object-fit: cover;
`
