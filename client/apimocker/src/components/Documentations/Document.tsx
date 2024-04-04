
import Doc from "../Doc"
const baseURL = 'https://apimocker.com/api/v1'
// const baseURL = 'http://localhost:8000/default/'

const Document = (props: any) => {
  let catagories = Object.keys(props.apiInfo)

  const DocUI = (api:any) => <Doc key={api.title} apiInfo={{ body: api.body, url: baseURL + api.url, method: api.method, description: api.description, response: api.response, title: api.title }} />

  return (
    <>
      {catagories.map(category => (
        Object.keys(props.apiInfo[category]).map(name => (<div key={name}>
          <h2>{name}</h2>
          {props.apiInfo[category][name].map(api => DocUI(api))}
        </div>))
      ))}
    </>
  )
}

export default Document
