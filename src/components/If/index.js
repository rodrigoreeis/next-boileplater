const If = ({ condition = true, renderIf = null, renderElse = null }) => {
  return (
    condition
      ? renderIf
      : renderElse
  )
}

export default If
