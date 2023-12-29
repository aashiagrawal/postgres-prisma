import React, {useEffect, useState} from 'react'

export default function AITextBox() {

    const [query, setQuery] = useState("")
    const [queryResponse, setQueryResponse] = useState("")
    // const [visible, setVisible] = useState(false)

    const handleTextChange = (event) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(query);
        callOpenAi();
    };

    const callOpenAi = async () => {
        try {
            const response = await fetch(`/api/chatgpt`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({query})
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const res = await response.json();
            console.log(res.message.content)
            setQueryResponse(res.message.content); 
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // useEffect(() => {
    //   try {
    //     const respose = await fetch (`/api/query/${queryResponse}`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: {name: "chart name", dashboard: "1", sqlQuery: queryResponse, }
    //     })
    //   }
    // }, [queryResponse]);


  return (
    <div className="flex items-start space-x-4 pb-10">
      <div className="min-w-0 flex-1">
        <form action="#" className="relative" onSubmit={handleSubmit}>
            <label htmlFor="comment" className="block text-md font-medium leading-6 text-gray-900">
              Ask Quill AI to generate a query
            </label>
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <textarea
              rows={2}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Start typing..."
              defaultValue={''}
              onChange={handleTextChange}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <h2>
            Quill AI response:
        </h2>
        <div>
            {queryResponse}
        </div>
      </div>
    </div>
  )
}



