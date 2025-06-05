var ExtractChannelResourceInfo = function ExtractChannelResourceInfo(data) {
  try {
    return JSON.parse(data);
  } catch (_unused) {
    return null;
  }
};

export { ExtractChannelResourceInfo };
//# sourceMappingURL=index.js.map
