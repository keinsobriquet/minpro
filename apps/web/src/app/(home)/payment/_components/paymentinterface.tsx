import { FaShoppingCart } from 'react-icons/fa';

export default function PaymentInterface() {
  return (
    <div className="flex justify-center py-32">
      <div className="artboard artboard-horizontal w-[1200px] h-[500px] bg-white/5">
        <div className="px-5 py-5 divide-y divide-white">
          <div className="flex justify-end pb-5">
            <FaShoppingCart />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-bold pt-2">Lorem, ipsum dolor</h3>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur temporibus ipsum nulla magnam sunt vel quae qui
              voluptate modi accusamus expedita animi facere, quis quibusdam
              consequatur praesentium minima? Doloribus, tenetur.
            </p>
            <ul className="list-disc list-inside pl-8 py-6">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <div className="flex justify-between pb-4">
              <div className="text-white">
                <h3 className="text-xl font-bold">Lorem ipsum dolor sit</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div className="flex gap-5 items-center">
                <p>Free</p>
                <button className="btn bg-white/5 hover hover:bg-teal-500 text-white w-28">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <div className="text-white">
              <h3 className="text-xl font-bold">Lorem ipsum dolor sit</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex gap-5 items-center">
              <p className='text-white'>Rp 123.456</p>
              <button className="btn bg-white/5 hover hover:bg-teal-500 text-white w-28">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
