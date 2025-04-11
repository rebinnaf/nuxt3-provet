<template>
  <provet-empty-state>
    <h2>Something’s wrong</h2>
    <p>We were unable to connect to the service. Click Retry to try again or View log to learn what happened.</p>
    <provet-stack justify-content="center" gap="s" direction="horizontal">
      <provet-button variant="primary" href="/signup">
        Retry
      </provet-button>
    </provet-stack>
  </provet-empty-state>
</template>
