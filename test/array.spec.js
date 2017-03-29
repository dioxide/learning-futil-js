import chai from 'chai'
import * as f from '../src/'
chai.expect()
const expect = chai.expect

describe('Array Functions', () => {
  it('compactJoin', () => {
    expect(f.compactJoin(',', [ 1, undefined, 2, null, 3 ])).to.eql('1,2,3')
    expect(f.compactJoin(' and ', [ null, 'Alice', 'Bob', false ])).to.eql('Alice and Bob')
  })
  it('dotJoin', () => {
    expect(f.dotJoin([ 1, undefined, 2, null, 3 ])).to.eql('1.2.3')
    expect(f.dotJoin([ null, 'Alice', 'Bob', false ])).to.eql('Alice.Bob')
  })
  it('repeated', () => {
    expect(f.repeated([ 1, 1, 2, 3, 3, 4 ])).to.eql([ 1, 3 ])
    expect(f.repeated([ 'a', 'b', 'b' ])).to.eql([ 'b' ])
  })
  it('mergeRanges', () => {
    expect(f.mergeRanges([[0, 2], [1, 4]])).to.deep.equal([[0, 4]])
    expect(f.mergeRanges([null, [1, 4]])).to.deep.equal([[1, 4]])
    expect(f.mergeRanges([[0, 1], [1, 4], [2, 4], [3, 5]])).to.deep.equal([[0, 5]])
  })
})
