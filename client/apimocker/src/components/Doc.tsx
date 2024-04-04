import { useState } from 'react';
import './Doc.scss'
import { convertObjectToString } from '../utils/StringUtils';


const getMethodeCode = (method: string) => {
    let payload = method == 'GET' ? '' : `, { method: "${method}", body: JSON.stringify(payload) }`;
    return `${payload})
        .then(res => res.json())
        .then(json => console.log(json))
`;
}



const generateRequestBody = (body: object, method: string) => {
    if (method == 'GET' || !body)  return '';
    let start = `const payload = `;
    let code = convertObjectToString(body) + "\n";
    return start + code
}

const copyScript = (body: any, url: string, method: string) => {
    let code = generateRequestBody(body, method);
    code = code + `fetch("${url}"`;
    code = code + getMethodeCode(method);
    console.log(code);
    navigator.clipboard.writeText(code);
    alert('code copied');
}

const copyOutput = (body: any) => {
    let output = convertObjectToString(body);
    navigator.clipboard.writeText(output);
    console.log(output);
    alert('code copied');
}


interface propType {
    apiInfo: {
        title: string,
        body: object,
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
        description?: string,
        response:object
    }
}

const Doc = ({ apiInfo }: propType) => {
    const [outputHidden, toggleOutput] = useState(true);

    return (
        <div>
            <h2 className='code-h2' id ={apiInfo.title}>{apiInfo.title}</h2>
            <div className="code-container">
                <span className='copy-icon' onClick={() => copyScript(apiInfo.body, apiInfo.url, apiInfo.method)}><img src="copy.png" alt="" title='Copy code' /></span>
                <pre>
                    <code className='c-code'>
                        {generateRequestBody(apiInfo.body, apiInfo.method)}
                        fetch(<span className='code-red-line'>"{apiInfo.url}"</span>
                        {getMethodeCode(apiInfo.method)}
                    </code>
                </pre>
            </div>
            <button className='show-output-btn' onClick={_ => toggleOutput(state => state = !state)}>
                {outputHidden ? 'Show output' : 'Hide output'}
            </button>
            {apiInfo.method == 'GET' && <a  className ="url-link" href={apiInfo.url} target="_blank" rel="noopener noreferrer"> Test in browser</a>}
            <div className="output" hidden={outputHidden}>
                <div className="code-container">
                    <span className='copy-icon' onClick={() => copyOutput(apiInfo.response)}><img src="copy.png" alt="" title='Copy code' /></span>
                    <pre>
                        <code>
                            <p className='code-green-line'>/* ... API Response ... */</p>
                            {convertObjectToString(apiInfo.response)}
                        </code>
                    </pre>
                </div>
            </div>
            {apiInfo.description && <div className='api-description'>
                <img src='/info.png' className='info-icon' />
               <span>{apiInfo.description}</span>
            </div>}
        </div>
    )
}

export default Doc
