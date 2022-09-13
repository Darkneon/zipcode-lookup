import ZipCode from '../features/ZipCode/ZipCode';
import styled from '@emotion/styled';
import HorizontalVerticalCenter from '../components/HorizontalVerticalCenter';

const Background = styled.div`
  height: 100%;
  width: 100%;
  background: url(/world.jpg) no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
`
const Bubble = styled.div`
  background-color: rgba(255, 255, 255, 0.80);
  padding: 10rem;
  border-radius: 15px;
`

const AttributionLinkContainer = styled.span`
  position: absolute;
  left: 10px;
  top: 10px;
`

function HomePage() {
    return <Background>
        <AttributionLinkContainer>
            <a href="https://www.freepik.com/free-vector/low-poly-world-map-earth-atlas-isolated-background-illustration_13031917.htm#query=world%20map&position=0&from_view=search">
                Image by macrovector
            </a> on Freepik
        </AttributionLinkContainer>

        <HorizontalVerticalCenter>
            <Bubble>
                <ZipCode />
            </Bubble>
        </HorizontalVerticalCenter>
    </Background>
}

export default HomePage;