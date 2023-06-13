package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

const testServerHost = "127.0.0.1:6666"

type testRequest struct {
	Value string `json:"value"`
}

type testResponse struct {
	Value string `json:"value"`
}

const testAPIUrl = "/test"

func testAPIHandler(response http.ResponseWriter, request *http.Request) {
	bodyContent, err := io.ReadAll(request.Body)
	defer request.Body.Close()
	if err != nil {
		response.Write([]byte(err.Error()))
		return
	}
	fmt.Printf("receive request %s\n", bodyContent)

	c2sMsg := &testRequest{}
	err = json.Unmarshal(bodyContent, c2sMsg)
	if err != nil {
		response.Write([]byte(err.Error()))
		return
	}
	fmt.Printf("receive request value %v\n", c2sMsg.Value)

	s2cMsg := &testResponse{Value: c2sMsg.Value}
	bodyContent, err = json.Marshal(s2cMsg)
	if err != nil {
		response.Write([]byte(err.Error()))
		return
	}
	response.Write(bodyContent)
}

func main() {
	http.HandleFunc(testAPIUrl, testAPIHandler)
	fmt.Printf("listen and serve on %v\n", testServerHost)
	http.ListenAndServe(testServerHost, nil)
}
