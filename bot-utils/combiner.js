const Combiner = () => {
  function CombinerObj() {};

  const combiner = [];
  const add = (arg1, arg2) => {
    combiner.push({arg1, arg2})
  }

  CombinerObj.prototype.add = add;
  CombinerObj.prototype.valueOf = function () {
    return combiner;
  };

  return new CombinerObj;
};

module.exports = Combiner;
