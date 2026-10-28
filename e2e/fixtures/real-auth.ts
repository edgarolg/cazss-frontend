// Credentials for integration tests against a real backend.
// Set them in your environment (see .env.example); never commit real values.
const email = process.env.E2E_EMAIL ?? '';
const password = process.env.E2E_PASSWORD ?? '';

if (!email || !password) {
	throw new Error('Set E2E_EMAIL and E2E_PASSWORD to run the integration tests.');
}

export const REAL_CREDENTIALS = { email, password };

export const REAL_USER_INFO = {
	email,
	// Role will be mapped from ROLE_CONFIG to CONFIG by the frontend
	role: 'CONFIG'
};
