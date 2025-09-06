package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/payment", func(write http.ResponseWriter, r *http.Request) {
		write.Header().Set("Access-Control-Allow-Origin", "*")
		write.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		write.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		fmt.Fprintf(write, "API DE PAGAMENTO")
	})

	fmt.Println("Servidor porta 8081")

	if err := http.ListenAndServe(":8081", nil); err != nil {
		fmt.Println("Erro", err)
	}

}
