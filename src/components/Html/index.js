const createMarkup = data => ({
  __html: data,
})

const Html = ({ children, ...props }) => (
  <div
    className='content'
    {...props}
    dangerouslySetInnerHTML={createMarkup(children)}
  />
)

export default Html
