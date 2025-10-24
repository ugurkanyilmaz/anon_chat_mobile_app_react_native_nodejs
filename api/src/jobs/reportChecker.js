const ReportService = require('../services/ReportService');

module.exports = async function reportChecker() {
  const reports = await ReportService.findPending();
  // placeholder logic
  return reports.length;
};
