
const ErrorMessage =({items})=>{
  

return(
  <>
  {/* //logical operator */}
  {items.length===0 && <h3>Still hungry</h3>}
  </>
)
}
export default ErrorMessage