const ClaimService = require('../services/ClaimService');

module.exports = async function claimChecker() {
  const claims = await ClaimService.checkOpenClaims();
  // placeholder logic
  return claims.length;
};
