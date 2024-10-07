"use client";
import React from 'react'
import styled from "styled-components";
import Link from "next/link";

const StyledWrapper = styled.div`
  height: 100vh;
`

export default function Home() {
  return (
    <div>
      <main>
        <StyledWrapper>
          <h1>HELLO</h1>
          <Link href="/haymarket">Link to test project</Link>
        </StyledWrapper>
      </main>
    </div>
  );
}
