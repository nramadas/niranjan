import * as useAttachableCallback from "./useAttachableCallback"
// @ponicode
describe("useAttachableCallback.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            useAttachableCallback.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
