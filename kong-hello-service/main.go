package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/hello", func(write http.ResponseWriter, request *http.Request) {
		write.Header().Set("Access-Control-Allow-Origin", "*")
		write.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		write.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		fmt.Fprintf(write, "API DE HELLO ")
	})
	fmt.Println("Servidor ta rodando na porta 8080")
	http.ListenAndServe(":8080", nil)
}
