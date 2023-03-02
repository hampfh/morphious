import { makeMorph } from "./index.js"
import { describe, it } from "node:test"
import assert from "node:assert"

describe("morph", () => {
	it("should double a number", () => {
		const mapping = {
			double: (x: number) => x * 2,
			pythagorean: (x: number, y: number) => Math.sqrt(x * x + y * y)
		}

		const morph = makeMorph(mapping)

		morph("double", 2) // 4
		morph("pythagorean", 3, 4) // 5
	})

	it("morphs snake_case object to camelCase", () => {
		const mapping = {
			dbUser: (user: {
				user_id: number
				user_email: string
				full_name: string
			}) => ({
				userId: user.user_id,
				userEmail: user.user_email,
				fullName: user.full_name
			})
		}

		const morph = makeMorph(mapping)

		assert.equal(
			JSON.stringify(
				morph("dbUser", {
					user_id: 1,
					user_email: "some@user.com",
					full_name: "Some User"
				})
			),
			JSON.stringify({
				userId: 1,
				userEmail: "some@user.com",
				fullName: "Some User"
			})
		)
	})
})
