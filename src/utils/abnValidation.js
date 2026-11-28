/**
 * Official Australian Business Number (ABN) and Australian Company Number (ACN)
 * checksum validation helpers per ATO and ASIC specifications.
 */

const ABN_WEIGHTS = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const ACN_WEIGHTS = [8, 7, 6, 5, 4, 3, 2, 1];

/**
 * Validates an 11-digit Australian Business Number using the ATO modulus-89 checksum.
 * @param {string} digits - 11 numeric characters
 * @returns {boolean}
 */
export function isValidAbnChecksum(digits) {
  if (!/^\d{11}$/.test(digits)) return false;
  const nums = digits.split('').map(Number);
  nums[0] = nums[0] - 1;
  const sum = nums.reduce((acc, digit, idx) => acc + digit * ABN_WEIGHTS[idx], 0);
  return sum % 89 === 0;
}

/**
 * Validates a 9-digit Australian Company Number using the ASIC modulus-10 checksum.
 * @param {string} digits - 9 numeric characters
 * @returns {boolean}
 */
export function isValidAcnChecksum(digits) {
  if (!/^\d{9}$/.test(digits)) return false;
  const nums = digits.split('').map(Number);
  const sum = nums.slice(0, 8).reduce((acc, digit, idx) => acc + digit * ACN_WEIGHTS[idx], 0);
  const expectedCheckDigit = (10 - (sum % 10)) % 10;
  return expectedCheckDigit === nums[8];
}

/**
 * Validates an optional ABN (11 digits) or ACN (9 digits) field.
 * Allows empty input; when provided, enforces digit format and official checksum.
 * @param {string} rawValue
 * @returns {{ valid: boolean, error: string }}
 */
export function validateAbnOrAcn(rawValue) {
  const trimmed = (rawValue || '').trim();
  if (!trimmed) {
    return { valid: true, error: '' };
  }

  const normalized = trimmed.replace(/[\s-]+/g, '');
  if (!/^\d+$/.test(normalized)) {
    return {
      valid: false,
      error: 'Enter numbers only for an 11-digit ABN or 9-digit ACN.'
    };
  }

  if (normalized.length === 11) {
    return isValidAbnChecksum(normalized)
      ? { valid: true, error: '' }
      : {
          valid: false,
          error: 'Invalid 11-digit ABN checksum. Please check your Australian Business Number.'
        };
  }

  if (normalized.length === 9) {
    return isValidAcnChecksum(normalized)
      ? { valid: true, error: '' }
      : {
          valid: false,
          error: 'Invalid 9-digit ACN checksum. Please check your Australian Company Number.'
        };
  }

  return {
    valid: false,
    error: 'ABN must be 11 digits or ACN must be 9 digits.'
  };
}
