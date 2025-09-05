package models

type Response struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

// NewSuccessResponse creates a new success response
func NewSuccessResponse(data interface{}, message string) Response {
	return Response{
		Success: true,
		Message: message,
		Data:    data,
	}
}

// NewErrorResponse creates a new error response
func NewErrorResponse(message string) Response {
	return Response{
		Success: false,
		Message: message,
		Data:    nil,
	}
}
