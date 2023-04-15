
console.log('nodejs')

const { Configuration, OpenAIApi } = require("openai");
const apiKey = "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"
const express = require('express') // express 불러와서
var cors = require('cors')
const app = express() // app으로 만든 다음


const configuration = new Configuration({
    apiKey: apiKey,
  });
const openai = new OpenAIApi(configuration);
const give_role = "당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다.  당신은 모든 답을 반드시 한 문장으로 말해야 합니다."

// get 요청이 오면
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// CORS 이슈 해결
// let corsOptions = {
//     origin: 'https://www.domain.com',
//     credentials: true
// }
app.use(cors());

console.log('nodejs')

// POST 요청 받을 수 있게
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/fortuneTell', async function (req, res) {
    const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "system", content: give_role},
        {role: "user", content: give_role},
        {role: "assistant", content: "알겠습니다. 어떤 질문이든 답변해드리겠습니다."},
        {role: "user", content: "오늘의 운세를 한마디로"}
    ],
    });

    let fortune = completion.data.choices[0].message['content']
    console.log(fortune);
    res.json({"assistant": fortune});
  });

// 3000포트로 넘겨주겠다.
app.listen(3000)
