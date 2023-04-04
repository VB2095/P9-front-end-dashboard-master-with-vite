import { Link } from 'react-router-dom'
import './home.scss'
function Home () {
    return (
        <div className='home'>
            <svg fill="none" viewBox="0 0 178 61" xmlns="http://www.w3.org/2000/svg">
                <path d="m72.281 38.553c-1.1313-0.5072-1.9484-1.2682-2.577-2.2193-0.6285-0.9511-0.9428-2.0291-1.0056-3.2973h2.9541c0.0628 1.078 0.5657 1.9657 1.3199 2.6632s1.8856 1.0146 3.1426 1.0146c1.1314 0 2.0113-0.2537 2.7027-0.6976 0.6914-0.5072 1.0685-1.1413 1.0685-2.0291 0-0.6341-0.1885-1.1413-0.5656-1.5218-0.3772-0.3804-0.88-0.6341-1.5085-0.8243s-1.5713-0.3805-2.7656-0.6341h-0.1257c-1.1313-0.1902-2.137-0.4439-2.9541-0.8243-0.817-0.3805-1.5084-0.8878-2.0741-1.5853-0.5028-0.6975-0.7542-1.6486-0.7542-2.79 0-1.078 0.2514-2.0291 0.817-2.8534 0.5657-0.8243 1.32-1.4584 2.3256-1.9657 1.0057-0.4439 2.137-0.6975 3.3941-0.6975 1.3199 0 2.5141 0.2536 3.5197 0.7609 1.0686 0.5073 1.8856 1.1414 2.4513 2.0291 0.6285 0.8877 0.9428 1.9023 0.9428 2.9802h-2.9541c-0.1257-0.9511-0.5657-1.712-1.257-2.2827-0.6914-0.5707-1.6342-0.8877-2.7027-0.8877s-1.9485 0.2536-2.577 0.6975c-0.6285 0.4438-0.9428 1.1413-0.9428 1.9657 0 0.6341 0.1886 1.0779 0.5657 1.4584 0.3771 0.317 0.8799 0.6341 1.5085 0.8243 0.6285 0.1902 1.5084 0.3805 2.7026 0.6341 1.1942 0.1902 2.1999 0.5073 3.0798 0.8243 0.88 0.3171 1.5714 0.8878 2.137 1.5853 0.5657 0.6975 0.8171 1.6486 0.8171 2.79 0 1.078-0.3142 2.0291-0.8799 2.9168-0.5657 0.8878-1.3828 1.5219-2.4513 2.0291-1.0685 0.5073-2.1998 0.6975-3.5198 0.6975-1.4456 0.0635-2.7655-0.1902-3.834-0.7609z" fill="#E60000"/>
                <path d="m95.851 26.252c0.9428 0.5706 1.697 1.3316 2.2627 2.4095 0.5657 1.078 0.8171 2.2828 0.8171 3.7412 0 1.395-0.2514 2.5998-0.8171 3.6143-0.5657 1.078-1.3199 1.9023-2.2627 2.473s-2.0741 0.8877-3.2684 0.8877c-1.1942 0-2.1998-0.2536-3.0169-0.7609-0.8171-0.5072-1.3828-1.2048-1.8227-2.0291l0.3771-0.6341v8.6237h-2.8284v-18.959h2.4513l0.5656 3.3607-0.6285-0.6341c0.5028-0.8243 1.1314-1.5219 1.8856-2.0925 0.8171-0.5073 1.7599-0.761 2.9541-0.761 1.257-0.0634 2.3256 0.2537 3.3312 0.761zm-5.8453 2.1559c-0.6286 0.3804-1.0685 0.8877-1.3828 1.5852s-0.5028 1.4584-0.5028 2.3462c0 0.8877 0.1885 1.712 0.5028 2.4095s0.8171 1.2048 1.3828 1.6487c0.6285 0.3804 1.257 0.5707 2.0741 0.5707 0.7543 0 1.4456-0.1903 2.0742-0.5707 0.6285-0.3805 1.0685-0.9512 1.3827-1.5852 0.3143-0.6976 0.5029-1.4585 0.5029-2.3462s-0.1886-1.6487-0.5029-2.3462c-0.3142-0.6975-0.7542-1.2047-1.3827-1.5852-0.6286-0.3805-1.3199-0.5707-2.0742-0.5707-0.8171-0.1268-1.5085 0.0634-2.0741 0.4439z" fill="#E60000"/>
                <path d="m104.02 38.49c-1.069-0.5707-1.886-1.395-2.451-2.473-0.566-1.0779-0.88-2.2827-0.88-3.6143 0-1.395 0.314-2.5998 0.88-3.6778 0.565-1.0779 1.382-1.8388 2.451-2.4095 1.068-0.5707 2.263-0.8878 3.583-0.8878 1.382 0 2.577 0.3171 3.582 0.8878 1.069 0.5707 1.886 1.395 2.451 2.4095 0.566 1.078 0.88 2.2828 0.88 3.6778s-0.314 2.5998-0.88 3.6778c-0.565 1.0779-1.382 1.8388-2.451 2.4729-1.068 0.5707-2.263 0.8878-3.582 0.8878-1.383-0.0635-2.577-0.3805-3.583-0.9512zm5.657-2.1559c0.628-0.3805 1.068-0.8877 1.382-1.5852 0.315-0.6976 0.503-1.4585 0.503-2.3462s-0.188-1.6486-0.503-2.3462c-0.314-0.6975-0.754-1.2047-1.382-1.5852-0.629-0.3805-1.32-0.5707-2.074-0.5707-0.755 0-1.509 0.1902-2.075 0.5707-0.628 0.3805-1.068 0.8877-1.382 1.5852-0.315 0.6976-0.503 1.4585-0.503 2.3462s0.188 1.6486 0.503 2.3462c0.314 0.6975 0.817 1.2047 1.382 1.5852 0.629 0.3804 1.32 0.5707 2.075 0.5707 0.754 0 1.508-0.1903 2.074-0.5707z" fill="#E60000"/>
                <path d="m119.3 25.618 0.503 3.3607-0.566-0.6341c0.378-0.8243 0.943-1.5218 1.572-1.9657 0.628-0.5073 1.571-0.6975 2.765-0.6975h0.629v2.6632h-1.257c-1.194 0-2.012 0.3805-2.577 1.1414-0.503 0.7609-0.817 1.7754-0.817 2.9802v6.8483h-2.829v-13.696h2.577z" fill="#E60000"/>
                <path d="m126.08 21.75h2.829v3.8046h3.268v2.473h-3.268v7.1018c0 0.5707 0.125 0.9512 0.314 1.1414 0.189 0.2536 0.566 0.3171 1.069 0.3171h2.199v2.5363h-2.765c-1.257 0-2.2-0.317-2.766-0.8877-0.565-0.5707-0.88-1.5218-0.88-2.79v-13.696z" fill="#E60000"/>
                <path d="m137.21 38.553c-1.131-0.5072-1.948-1.2682-2.577-2.2193-0.628-0.9511-0.942-2.0291-1.005-3.2973h2.954c0.063 1.078 0.565 1.9657 1.32 2.6632 0.754 0.6975 1.885 1.0146 3.142 1.0146 1.132 0 2.012-0.2537 2.703-0.6976 0.691-0.5072 1.069-1.1413 1.069-2.0291 0-0.6341-0.189-1.1413-0.566-1.5218-0.377-0.3804-0.88-0.6341-1.509-0.8243-0.628-0.1902-1.571-0.3805-2.765-0.6341h-0.126c-1.131-0.1902-2.137-0.4439-2.954-0.8243-0.817-0.3805-1.508-0.8878-2.074-1.5853-0.503-0.6975-0.754-1.6486-0.754-2.79 0-1.078 0.251-2.0291 0.817-2.8534 0.565-0.8243 1.32-1.4584 2.325-1.9657 1.006-0.4439 2.137-0.6975 3.394-0.6975 1.32 0 2.515 0.2536 3.52 0.7609 1.069 0.5073 1.886 1.1414 2.451 2.0291 0.629 0.8877 0.943 1.9023 0.943 2.9802h-2.954c-0.126-0.9511-0.566-1.712-1.257-2.2827s-1.634-0.8877-2.703-0.8877c-1.068 0-1.948 0.2536-2.577 0.6975-0.628 0.4438-0.942 1.1413-0.942 1.9657 0 0.6341 0.188 1.0779 0.565 1.4584 0.377 0.317 0.88 0.6341 1.509 0.8243 0.628 0.1902 1.508 0.3805 2.702 0.6341 1.195 0.1902 2.2 0.5073 3.08 0.8243 0.88 0.3171 1.572 0.8878 2.137 1.5853 0.566 0.6975 0.817 1.6486 0.817 2.79 0 1.078-0.314 2.0291-0.88 2.9168-0.565 0.8878-1.382 1.5219-2.451 2.0291-1.068 0.5073-2.2 0.6975-3.52 0.6975-1.445 0.0635-2.702-0.1902-3.834-0.7609z" fill="#E60000"/>
                <path d="m153.05 38.49c-1.068-0.5707-1.885-1.395-2.451-2.4095-0.566-1.078-0.88-2.2828-0.88-3.6778s0.252-2.6632 0.817-3.6778c0.566-1.0145 1.32-1.8388 2.326-2.4095 1.005-0.5707 2.137-0.8878 3.457-0.8878s2.451 0.2537 3.457 0.761c1.005 0.5072 1.76 1.2682 2.325 2.2827 0.566 1.0146 0.88 2.1559 0.88 3.4241v0.5073c0 0.1902 0 0.3805-0.063 0.5707h-10.182v0.0634 0.0634c0.063 0.7609 0.189 1.4584 0.503 2.0291s0.754 1.0146 1.32 1.3316c0.565 0.3171 1.194 0.5073 1.948 0.5073 0.88 0 1.634-0.1902 2.2-0.6341 0.629-0.4439 1.006-1.0146 1.194-1.7755h2.892c-0.189 0.8878-0.503 1.7121-1.069 2.4096s-1.257 1.2682-2.074 1.712c-0.88 0.3805-1.823 0.6341-2.891 0.6341-1.446 0.0635-2.703-0.2536-3.709-0.8243zm1.697-10.336c-0.502 0.2536-0.942 0.6341-1.257 1.1413-0.314 0.5073-0.565 1.0146-0.628 1.6487h7.228c-0.126-1.0146-0.503-1.8389-1.131-2.3462-0.629-0.5707-1.509-0.8243-2.515-0.8243-0.628-0.0634-1.194 0.0634-1.697 0.3805z" fill="#E60000"/>
                <path d="m168.07 38.49c-1.068-0.5707-1.885-1.395-2.451-2.4095-0.566-1.078-0.88-2.2828-0.88-3.6778s0.251-2.6632 0.817-3.6778c0.566-1.0145 1.32-1.8388 2.326-2.4095 1.005-0.5707 2.137-0.8878 3.457-0.8878s2.451 0.2537 3.457 0.761c1.005 0.5072 1.759 1.2682 2.325 2.2827 0.566 1.0146 0.88 2.1559 0.88 3.4241v0.5073c0 0.1902 0 0.3805-0.063 0.5707h-10.182v0.0634 0.0634c0.063 0.7609 0.189 1.4584 0.503 2.0291s0.754 1.0146 1.32 1.3316c0.565 0.3171 1.194 0.5073 1.948 0.5073 0.88 0 1.634-0.1902 2.2-0.6341 0.629-0.4439 1.006-1.0146 1.194-1.7755h2.891c-0.188 0.8878-0.502 1.7121-1.068 2.4096s-1.257 1.2682-2.074 1.712c-0.88 0.3805-1.823 0.6341-2.891 0.6341-1.446 0.0635-2.64-0.2536-3.709-0.8243zm1.697-10.336c-0.503 0.2536-0.943 0.6341-1.257 1.1413-0.314 0.5073-0.565 1.0146-0.628 1.6487h7.228c-0.126-1.0146-0.503-1.8389-1.132-2.3462-0.628-0.5707-1.508-0.8243-2.514-0.8243-0.628-0.0634-1.194 0.0634-1.697 0.3805z" fill="#E60000"/>
                <path d="m29.598 58.703c15.794 0 28.598-12.917 28.598-28.851 0-15.934-12.804-28.851-28.598-28.851-15.794 0-28.598 12.917-28.598 28.851 0 15.934 12.804 28.851 28.598 28.851z" fill="#FF0101"/>
                <path d="m41.917 17.423c2.6382 0 4.7768-2.1576 4.7768-4.8191 0-2.6615-2.1386-4.8191-4.7768-4.8191s-4.7768 2.1576-4.7768 4.8191c0 2.6615 2.1386 4.8191 4.7768 4.8191z" fill="#020203"/>
                <g mask="url(#a)">
                    <path d="m40.535 30.422c0.3143 0.5073 0.88 0.8243 1.5085 0.8243 0.3143 0 0.6285-0.0634 0.9428-0.2536l8.6109-5.1996c0.8799-0.5073 1.1313-1.6486 0.6285-2.473-0.5028-0.8877-1.6342-1.1413-2.4513-0.6341l-7.1652 4.3119-3.4569-6.7848c-0.9428-0.9512-2.0113-1.9023-3.0798-2.7266l-10.245-5.1996c-0.6914-0.3171-1.4456-0.2537-2.0113 0.2536l-8.548 7.7994c-0.7543 0.6975-0.8171 1.8389-0.1257 2.5364 0.6914 0.7609 1.8227 0.8243 2.5141 0.1268l7.7309-6.9751 5.3425 2.7266-9.1765 14.331-20.93 24.983c-0.81709 0.9511-0.75424 2.4729 0.25141 3.2973 0.94279 0.8243 2.4513 0.7609 3.2684-0.2537l20.302-23.652 8.7366 2.0291-5.971 9.448c-0.6286 1.1414-0.2514 2.5364 0.8799 3.1705 1.0057 0.5707 2.3256 0.317 3.017-0.6975l7.668-12.238c0.44-0.6341 0.5029-1.4584 0.2514-2.1559-0.3142-0.6975-0.8799-1.2048-1.6341-1.3316l-6.7253-1.5852 6.0967-9.6383 3.7712 5.9605z" fill="#020203"/>
                </g>
            </svg>
            <h1>Bienvenue</h1>
            <h2>Vous êtes sur la page d'accueil</h2>
            <p>Ce site vous permets d'accéder à un prototype de dasbhoard gérant des données fictives de performance sportive.</p>
            <p>Pour afficher ces données connecter vous à un des profils ci-dessous :</p>
            <Link to="/user/12">Se connecter en tant que Karl Dovineau</Link>
            <Link to="/user/18">Se connecter en tant que Cecilia Ratorez</Link>
        </div>
    )
}

export default Home