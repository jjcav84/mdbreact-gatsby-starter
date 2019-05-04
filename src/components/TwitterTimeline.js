import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { MDBContainer, MDBRow } from 'mdbreact'

const TwitterTimeline = () => {
  return (
    <section id="twitter" className="text-center mx-auto my-5">
      <MDBContainer>
        <MDBRow className="mx-auto" center>
          <div>
            <TwitterTimelineEmbed
              sourceType="URL"
              url="https://twitter.com/apple"
              options={{ width: 600, height: 450 }}
            />
          </div>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default TwitterTimeline
